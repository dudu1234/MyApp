namespace MyApp.API.Common
{
    public enum Gender
    {
        Male = 1,
        Female = 2
    }

    public enum UserType {
        User = 1,
        Manager = 2,
        Admin = 3
    }

    public enum OrderStatus
    {
        Open = 1,
        Confirmed = 2,
        Delivery = 3,
        Closed = 4,
        Deleted = 5
    }

    public enum ProductStatus {
        Active = 1,
        NotActive = 2,
        Deleted = 3
    }
}