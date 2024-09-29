using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Main;
using WebApi.Routing;


namespace ReactApp.Endpoints
{
    public class UserEndpoints : IEndpointRouteHandler
    {
        public void MapEndpoints(IEndpointRouteBuilder app)
        {
            app.MapGet("/me", (HttpContext context) => {
                var data = context.User.Identity?.Name.Split("\\");
                var user = data[1];
                var domain = data[0];

                
                // Do something with the username
                return Results.Ok(domain + "-" + user);
            });

            app.MapGet("/users", async (MainContext db) =>
            {
                return await db.Users.ToListAsync();
            });

            app.MapGet("/users/{id}", async (int id, MainContext db) =>
            {
                return await db.Users.FirstOrDefaultAsync(i => i.Id == id);
            });


            app.MapGet("/users/{id}/test", async (int id, MainContext db) =>
                await db.Users.Where(i => i.Id == id).FirstOrDefaultAsync()
                    is User user
                        ? Results.Ok(user)
                        : Results.NotFound());

            app.MapDelete("/users/{id}", async (int id, MainContext db) =>
            {
                if (await db.Users.FindAsync(id) is User user)
                {
                    db.Users.Remove(user);
                    await db.SaveChangesAsync();
                    return Results.NoContent();
                }

                return Results.NotFound();
            });

            app.MapPost("/users", async (User user, MainContext db) =>
            {
                db.Users.Add(user);
                await db.SaveChangesAsync();

                return Results.Created($"/context/users/{user.Id}", user);
            });

            app.MapPut("/users/{id}", async (int id, User input, MainContext db) =>
            {
                var entity = await db.Users.FindAsync(id);

                if (entity is null) return Results.NotFound();

                entity.FirstName = input.FirstName;
                entity.LastName = input.LastName;
                entity.Email = input.Email;
                entity.CompanyName = input.CompanyName;
                entity.Username = input.Username;
                entity.Active = input.Active;

                await db.SaveChangesAsync();

                return Results.NoContent();
            });


        }
    }
}


