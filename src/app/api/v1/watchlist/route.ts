import path from 'path';
import fs from 'fs';
import { Movie } from '@/types/Movie';
const watchlistFilePath = path.join(__dirname, 'watchlist.txt');
console.log({
    watchlistFilePath,
});

// helpers
const readWatchlistFile = () => {
    if (fs.existsSync(watchlistFilePath)) {
        const data = fs.readFileSync(watchlistFilePath, 'utf8');
        return JSON.parse(data || '[]');
    }
    return [];
};

const writeWatchlistFile = (data: Movie[]) => {
    fs.writeFileSync(watchlistFilePath, JSON.stringify(data));
};

export async function POST(request: Request) {
    const body = await request.json();
    const watchlist = readWatchlistFile();
    watchlist.push(body);
    try {
        writeWatchlistFile(watchlist);
        return Response.json({ success: true, message: 'Omuk movie added to watchlist successfully' });
    } catch (error) {
        return Response.json({ success: false, message: 'Error adding movie to watchlist' });
    }
}

export async function GET() {
    try {
        const watchlist = readWatchlistFile();
        return Response.json({ success: true, data: watchlist, message: 'All movie get successfully' });
    } catch (error) {
        return Response.json({ success: false, data: null, message: 'Error fetching watchlist' });
    }
}

export async function DELETE(request: Request) {
    const body = await request.json();
    try {
        const watchlist = readWatchlistFile();
        const newWatchlist = watchlist.filter((movie: any) => movie.id !== body);
        writeWatchlistFile(newWatchlist);
        return Response.json({ success: true, data: watchlist, message: 'Omuk movie deleted from watchlist successfully' });
    } catch (error) {
        return Response.json({ success: false, data: null, message: 'Error deleting movie to watchlist' });
    }
}
