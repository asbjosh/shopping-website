using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using ShoppingSite.Application.Interfaces;
using ShoppingSite.Domain.Models;
using ShoppingSite.Infrastructure.DBO;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingSite.Infrastructure.Repositories
{
    public class UserRepo : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        //public record LoginResponse(string Email, string Username, string Role);

     
        public async Task<User?> GetByEmailAndHashedPassword(string Email, string HashedPassword)
        {
            return await (
                from u in _context.Users
                join a in _context.Accounts on u.Id equals a.UserId
                where u.Email == Email && a.PasswordHash == HashedPassword
                select u
            ).AsNoTracking().FirstOrDefaultAsync(); 
        }

        public async Task<User?> CreateAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> EmailExistsAsync(string Email)
        {
            return await _context.Users.AsNoTracking().AnyAsync(x => x.Email ==  Email);
        }
    }
}
