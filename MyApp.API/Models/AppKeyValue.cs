namespace MyApp.API.Models
{
    public class AppKeyValue
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
        public int? Priority { get; set; }
    }
}