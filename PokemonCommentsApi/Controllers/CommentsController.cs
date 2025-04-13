using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PokemonCommentsApi.Data;
using PokemonCommentsApi.Models;

namespace PokemonCommentsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]    
    public class CommentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/comments/pokemon/5
        [HttpGet("pokemon/{pokemonId}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetCommentsByPokemon(string pokemonId)
        {
            return await _context.Comments
                .Where(c => c.PokemonId == pokemonId)
                .OrderByDescending(c => c.Date)
                .ToListAsync();
        }

        // POST: api/comments
        [HttpPost]
        public async Task<ActionResult<Comment>> PostComment(Comment comment)
        {
        if (!ModelState.IsValid)
        {
        return BadRequest(ModelState);
        }
    
        _context.Comments.Add(comment);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetComment", new { id = comment.Id }, comment);
        }

        // GET: api/comments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comment>> GetComment(int id)
        {
        var comment = await _context.Comments.FindAsync(id);

        if (comment == null)
        {
        return NotFound();
        }

        return comment;
        }
    }
}