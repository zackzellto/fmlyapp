using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace fmly.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string? profilePicture { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateOnly? Birthday { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }

    }
}