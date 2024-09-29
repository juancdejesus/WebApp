using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models.Main;
using WebApi.Routing;

namespace ReactApp.Endpoints
{
    public class RecipientEndpoints : IEndpointRouteHandler
    {

        public void MapEndpoints(IEndpointRouteBuilder app)
        {
            app.MapGet("/recipients", async (MainContext db) =>
            {
                return await db.Recipients.ToListAsync();
            });

            app.MapGet("/recipients/{id}", async (int id, MainContext db) =>
                await db.Recipients.Where(i => i.Id == id).FirstOrDefaultAsync()
                    is Recipient user
                        ? Results.Ok(user)
                        : Results.NotFound());

            app.MapDelete("/recipients/{id}", async (int id, MainContext db) =>
            {
                if (await db.Recipients.FindAsync(id) is Recipient recipient)
                {
                    db.Recipients.Remove(recipient);
                    await db.SaveChangesAsync();
                    return Results.NoContent();
                }

                return Results.NotFound();
            });

            app.MapPost("/recipients", async (Recipient recipient, MainContext db) =>
            {
                db.Recipients.Add(recipient);
                await db.SaveChangesAsync();

                return Results.Created($"/context/recipients/{recipient.Id}", recipient);
            });

            app.MapPut("/recipients/{id}", async (int id, Recipient input, MainContext db) =>
            {
                var entity = await db.Recipients.FindAsync(id);

                if (entity is null) return Results.NotFound();

                entity.GroupName = input.GroupName;
                entity.Email = input.Email;
                entity.EffectiveDate = input.EffectiveDate;
                entity.ExpirationDate = input.ExpirationDate;
                entity.IsActive = input.IsActive;

                await db.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}


