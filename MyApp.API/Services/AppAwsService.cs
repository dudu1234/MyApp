using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using MyApp.API.Data;
using MyApp.API.Dtos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.API.Services
{
    public class AppAwsService : IAppAwsService
    {
        private const string defaultBucketName = "db-apps-bucket1";
        private const string defaultKeyName = "BigFile.txt";
        private static readonly RegionEndpoint bucketRegion = RegionEndpoint.EUCentral1;
        private static IAmazonS3 client;

        public async Task<IList<AwsFileInfo>> GetBucketFiles(string bucketName)
        {
            client = new AmazonS3Client(bucketRegion);
            try
            {
                ListObjectsV2Request request = new ListObjectsV2Request
                {
                    BucketName = bucketName,
                    MaxKeys = 50
                };
                ListObjectsV2Response response = await client.ListObjectsV2Async(request);
                return response.S3Objects.Select(x => new AwsFileInfo
                {
                    FileName = x.Key,
                    Size = x.Size
                }).ToList();
                
                // request.ContinuationToken = response.NextContinuationToken;
                // while (response.IsTruncated);
            }
            catch (AmazonS3Exception amazonS3Exception)
            {
                throw new Exception("S3 error occurred. Exception: " + amazonS3Exception.ToString());
            }
            catch (Exception e)
            {
                throw new Exception("Exception: " + e.ToString());
            }
        }

        public async Task<string> GetFile()
        {
            client = new AmazonS3Client(bucketRegion);
            return await ReadObjectDataAsync();
        }

        private async Task<string> ReadObjectDataAsync()
        {
            string responseBody = "";
            try
            {
                GetObjectRequest request = new GetObjectRequest
                {
                    BucketName = defaultBucketName,
                    Key = defaultKeyName
                };
                using (GetObjectResponse response = await client.GetObjectAsync(request))
                using (Stream responseStream = response.ResponseStream)
                using (StreamReader reader = new StreamReader(responseStream))
                {
                    string title = response.Metadata["x-amz-meta-title"]; // Assume you have "title" as medata added to the object.
                    string contentType = response.Headers["Content-Type"];
                    Console.WriteLine("Object metadata, Title: {0}", title);
                    Console.WriteLine("Content type: {0}", contentType);

                    responseBody = reader.ReadToEnd(); // Now you process the response body.
                }
            }
            catch (AmazonS3Exception e)
            {
                Console.WriteLine("Error encountered ***. Message:'{0}' when writing an object", e.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine("Unknown encountered on server. Message:'{0}' when writing an object", e.Message);
            }
            return responseBody;
        }
    }
}