using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Web;
using System.Reflection;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyApp.API.Data;
using MyApp.API.Dtos;
using MyApp.API.Models;
using System.Net.Http;
using System.Net;
using System.Net.Http.Headers;

namespace MyApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodeExamplesController : ControllerBase
    {
        public CodeExamplesController()
        {
        }

        [HttpGet("DownloadFile")]
        public async Task<IActionResult> DownloadFile()
        {
            try
            {
                //string file = Path.Combine(AssemblyDirectory, "App_Data"), filename);
                string fileName = "bigFile.txt";
                string file = @"C:\Programming\MyApp\MyApp.API\Data\bigFile.txt";
                var memory = new MemoryStream();
                using (var stream = new FileStream(file, FileMode.Open))
                {
                    await stream.CopyToAsync(memory);
                }

                memory.Position = 0;
                return File(memory, GetMimeType(fileName), fileName);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("DownloadFile3")]
        public async Task<IActionResult> DownloadFile3Async()
        {
            string file = @"https://s3.eu-central-1.amazonaws.com/db-apps-bucket1/BigFile.txt";
            //string file = @"https://s3-us-west-2.amazonaws.com/itero-fileman-usw2-dev/test/bigFile2.txt";
            try
            {
                // Example : https://blog.bennymichielsen.be/2017/01/03/streaming-files-with-httpclient-and-multiple-controllers/
                var httpClient = new HttpClient(new HttpClientHandler() { UseDefaultCredentials = true });
                var response = await httpClient.GetAsync(file, HttpCompletionOption.ResponseHeadersRead);
                if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    return BadRequest();
                }
                else
                {
                    response.EnsureSuccessStatusCode();
                    var fileStream = await response.Content.ReadAsStreamAsync();
                    return File(fileStream, response.Content.Headers?.ContentType?.MediaType, response.Content.Headers?.ContentDisposition?.FileName);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        private static string AssemblyDirectory
        {
            get
            {
                string codeBase = Assembly.GetExecutingAssembly().CodeBase;
                UriBuilder uri = new UriBuilder(codeBase);
                string path = Uri.UnescapeDataString(uri.Path);
                return Path.GetDirectoryName(path);
            }
        }

        private string GetMimeType(string file)
        {
            string extension = Path.GetExtension(file).ToLowerInvariant();
            switch (extension)
            {
                case ".txt": return "text/plain";
                case ".pdf": return "application/pdf";
                case ".doc": return "application/vnd.ms-word";
                case ".docx": return "application/vnd.ms-word";
                case ".xls": return "application/vnd.ms-excel";
                case ".png": return "image/png";
                case ".jpg": return "image/jpeg";
                case ".jpeg": return "image/jpeg";
                case ".gif": return "image/gif";
                case ".csv": return "text/csv";
                default: return "";
            }
        }
    }
}