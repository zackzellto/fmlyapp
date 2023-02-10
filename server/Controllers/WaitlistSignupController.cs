using fmly.Data;
using fmly.Models;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class WaitlistSignupController : ControllerBase
    {
        public readonly ILogger<WaitlistSignupController> _logger;
        private readonly FmlyApiDbContext _context;

        public WaitlistSignupController(ILogger<WaitlistSignupController> logger,
            FmlyApiDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost(Name = "WaitlistSignup")]
        public WaitlistSignup Post(WaitlistSignup waitlistSignup)
        {
            _context.WaitlistSignups.Add(waitlistSignup);
            _context.SaveChanges();
            return waitlistSignup;
        }

        [HttpGet(Name = "WaitlistSignups")]
        public IEnumerable<WaitlistSignup> Get()
        {
            return _context.WaitlistSignups.ToList();
        }
    }
}