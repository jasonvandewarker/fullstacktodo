using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class Todo
    {
        //primary key
        [Key]
        public int TodoesId { get; set; }


        //columns
        public String TodoText { get; set; }
        public int SetPriority { get; set; }
        public DateTime CreateDate { get; set; }




    }
}