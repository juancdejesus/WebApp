using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Models.Main;

[PrimaryKey("UserId", "RoleId")]
[Table("RoleUser")]
public partial class RoleUser
{
    [Key]
    public int UserId { get; set; }

    [Key]
    public int RoleId { get; set; }
}
