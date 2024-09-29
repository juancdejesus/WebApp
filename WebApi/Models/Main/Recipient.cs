using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Models.Main;

[Table("Recipient")]
public partial class Recipient
{
    [Key]
    public int Id { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? GroupName { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? Email { get; set; }

    public DateOnly? EffectiveDate { get; set; }

    public DateOnly? ExpirationDate { get; set; }

    public bool? IsActive { get; set; }
}
