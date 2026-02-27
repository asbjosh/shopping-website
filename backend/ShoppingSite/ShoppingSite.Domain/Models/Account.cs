using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingSite.Domain.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public required User User { get; set; }
        public required string PasswordHash { get; set; }
        public DateTime? LastLoginAt { get; set; }
    }
}
