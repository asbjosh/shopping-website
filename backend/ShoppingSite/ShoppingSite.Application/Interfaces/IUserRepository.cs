using ShoppingSite.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingSite.Application.Interfaces
{
    public interface IUserRepository
    {
        /* Task<IEnumerable<User>> GetAllAsync();
        Task<User?> GetByIdByAsync(int id); */
        Task<User?> GetByEmailAndHashedPassword(string email, string hashedPassword);
        Task<User?> CreateAsync(User user);
        /* Task<User?> UpdateAsync(User user);
        Task<User?> DeleteAsync(int id); */
        Task<bool> EmailExistsAsync (string email);
    }
}
