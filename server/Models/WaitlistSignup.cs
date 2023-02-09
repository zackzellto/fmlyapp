using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace fmly.Models
{
    public class WaitlistSignup
    {
        [Key]
        public string Email { get; set; } = null!;

    }
}