using ShoppingSite.Application.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingSite.Application.Interfaces
{
    public interface IUserService
    {
        //Task<IEnumerable<UserDTOResponse>> GetAllAsync();
        //Task<UserDTOResponse> GetByIdAsync(int id);
        Task<UserDTOResponse> GetByEmailAndPasswordAsync(string email, string password);
        Task<UserDTOResponse> CreateAsync(UserDTORequest requests);
        //Task<UserDTOResponse> UpdateAsync(UserDTORequest requests);
        //Task<UserDTOResponse> DeleteAsync(int id);
    }
}
