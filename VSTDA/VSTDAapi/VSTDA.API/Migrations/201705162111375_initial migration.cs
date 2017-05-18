namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialmigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        TodoesId = c.Int(nullable: false, identity: true),
                        TodoText = c.String(),
                        SetPriority = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TodoesId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Todoes");
        }
    }
}
