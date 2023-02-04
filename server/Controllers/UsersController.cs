using fmly.Data;
using fmly.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fmly.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly FmlyApiDbContext _context;

        public UsersController(ILogger<UsersController> logger,
            FmlyApiDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name = "GetUsers")]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}", Name = "GetUserById")]
        public User Get(int id)
        {
            return _context.Users.Find(id);
        }

        [HttpPost(Name = "CreateUser")]
        public User Post(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        [HttpPut("{id}", Name = "UpdateUser")]
        public User Put(int id, User user)
        {
            if (id != user.Id)
            {
                throw new Exception("Id does not match");
            }

            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
            return user;
        }

        [HttpDelete("{id}", Name = "DeleteUser")]
        public User Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            _context.Users.Remove(user);
            _context.SaveChanges();
            return user;
        }

        [HttpGet("{id}/birthday", Name = "GetBirthday")]
        public DateOnly? GetBirthday(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            return user.Birthday;
        }

    }
}