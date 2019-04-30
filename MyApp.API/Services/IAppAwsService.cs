using System.Collections.Generic;
using System.Threading.Tasks;
using MyApp.API.Dtos;

namespace MyApp.API.Services
{
    public interface IAppAwsService
    {
        Task<IList<AwsFileInfo>> GetBucketFiles(string bucketName);
        Task<string> GetFile();
    }
}