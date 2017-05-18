namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingDateTime : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Todoes", "CreateDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Todoes", "CreateDate");
        }
    }
}
