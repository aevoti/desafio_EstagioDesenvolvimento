using System.ComponentModel.DataAnnotations;

namespace PokemonCommentsApi.Models
{
    public class Comment
    {
        public int Id { get; set; }
        
        [Required]
        public string PokemonId { get; set; } = string.Empty;
        
        [Required]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        public string Text { get; set; } = string.Empty;
        
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }
}