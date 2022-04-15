﻿using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Activity> Activities { get; set; }
    }
}
