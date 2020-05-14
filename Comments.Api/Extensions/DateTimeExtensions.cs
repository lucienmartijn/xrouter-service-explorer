using System;

namespace Comments.Api.Helpers
{
    public static class DateTimeExtensions
    {
        public static string TimeAgo(this DateTime dateTime)
        {
            string result = string.Empty;
            var timeSpan = DateTime.Now.Subtract(dateTime);

            if (timeSpan <= TimeSpan.FromSeconds(60))
            {
                result = string.Format("{0}s", timeSpan.Seconds);
            }
            else if (timeSpan <= TimeSpan.FromMinutes(60))
            {
                result = timeSpan.Minutes > 1 ? 
                    String.Format("{0}m", timeSpan.Minutes) :
                    "1m";
            }
            else if (timeSpan <= TimeSpan.FromHours(24))
            {
                result = timeSpan.Hours > 1 ? 
                    String.Format("{0}h", timeSpan.Hours) : 
                    "1h";
            }
            else if (timeSpan <= TimeSpan.FromDays(30))
            {
                result = timeSpan.Days > 1 ? 
                    String.Format("{0}d", timeSpan.Days) : 
                    "1d";
            }
            else if (timeSpan <= TimeSpan.FromDays(365))
            {
                result = timeSpan.Days > 30 ? 
                    String.Format("{0}m", timeSpan.Days / 30) : 
                    "1m";
            }
            else
            {
                result = timeSpan.Days > 365 ? 
                    String.Format("{0}y", timeSpan.Days / 365) : 
                    "1y";
            }

            return result;
        }

        public static string DateTimeText(this DateTime dateTime)
        {
            return dateTime.ToString("MMM dd, yyyy hh:mmtt");
        }

    }
}

