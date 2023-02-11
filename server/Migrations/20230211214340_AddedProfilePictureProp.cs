using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fmly.Migrations
{
    /// <inheritdoc />
    public partial class AddedProfilePictureProp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "profilePicture",
                table: "Users",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "profilePicture",
                table: "Users");
        }
    }
}
