import React, { useState } from 'react';
import { SafeIcon } from './SafeIcon';
import { generateDesignConcept } from '../services/geminiService';
import ReactMarkdown from 'react-markdown'; // Note: Assuming this might be needed, but standard text display is fine too.
// Since I can't install extra packages not listed, I will render text simply or assume standard Markdown parsing isn't strictly required if I format output cleanly.
// Actually, I will just use whitespace-pre-wrap for the text.

export const DesignAssistant: React.FC = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [desc, setDesc] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !genre) return;

    setLoading(true);
    setResult(null);

    try {
      const concept = await generateDesignConcept(title, genre, desc);
      setResult(concept || "No concept generated.");
    } catch (err) {
      setResult("Error: Could not connect to the creative mind. Please check your API Key configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-swiss-accent"></div>
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
           <div className="p-2 bg-swiss-accent/10 rounded-full">
             <SafeIcon name="Star" className="text-swiss-accent w-6 h-6" />
           </div>
           <h2 className="font-display text-3xl font-bold">AI Concept Lab</h2>
        </div>
        <p className="text-gray-600 max-w-2xl">
          Not sure where to start? Let our AI Art Director analyze your book's essence and propose a Swiss-style visual direction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Book Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-swiss-bg border-b-2 border-gray-300 p-3 focus:outline-none focus:border-swiss-accent transition-colors"
              placeholder="e.g. The Void Between"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Genre</label>
            <input 
              type="text" 
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full bg-swiss-bg border-b-2 border-gray-300 p-3 focus:outline-none focus:border-swiss-accent transition-colors"
              placeholder="e.g. Sci-Fi Thriller"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Short Synopsis</label>
            <textarea 
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-swiss-bg border-b-2 border-gray-300 p-3 focus:outline-none focus:border-swiss-accent transition-colors h-32 resize-none"
              placeholder="Briefly describe the mood and core themes..."
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-swiss-black text-white py-4 font-bold uppercase tracking-widest hover:bg-swiss-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {loading ? (
              <>Processing...</>
            ) : (
              <>Generate Concept <SafeIcon name="ArrowRight" className="w-4 h-4" /></>
            )}
          </button>
        </form>

        <div className="bg-swiss-bg p-8 min-h-[300px] flex flex-col relative">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Art Direction Output</h3>
          
          {result ? (
            <div className="prose prose-sm max-w-none font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {result}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-center">
              <SafeIcon name="Monitor" className="w-12 h-12 mb-4 opacity-20" />
              <p>Awaiting input parameters...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};