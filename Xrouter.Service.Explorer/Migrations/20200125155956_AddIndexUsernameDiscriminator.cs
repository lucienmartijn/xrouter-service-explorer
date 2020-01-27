using Microsoft.EntityFrameworkCore.Migrations;

namespace Xrouter.Service.Explorer.Migrations
{
    public partial class AddIndexUsernameDiscriminator : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_NormalizedUserName_Discriminator",
                table: "AspNetUsers",
                columns: new[] { "NormalizedUserName", "Discriminator" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_NormalizedUserName_Discriminator",
                table: "AspNetUsers");
        }
    }
}
