namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ColumnName : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Todoes", "CreateDate", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Todoes", "CreateDate", c => c.DateTime(nullable: false));
        }
    }
}
