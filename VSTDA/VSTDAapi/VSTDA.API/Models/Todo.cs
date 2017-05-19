using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
        //[Column(TypeName = "datetime2")]
        public DateTime CreateDate { get; set; }




    }
}