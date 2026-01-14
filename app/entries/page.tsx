import prisma from '@/lib/prismaClient';
import  { formatDate }  from '@/lib/formatDate.ts';
export default async function EntriesPage(){
    const entries = await prisma.entry.findMany({
        orderBy:{ createdAt: "desc"},
    });

    return (
        <main style={{padding: "2rem"}}>
            <h1>Dev Journal</h1>
            {entries.length === 0 && <p>No entries yet. </p>}
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id} style={{marginBottom: "1rem"}}>
                            <h3>{entry.title}</h3>
                            <p>{entry.tag}</p>
                            <small>{formatDate(entry.createdAt)}</small>
                    </li>
                ))}
            </ul>
        </main>
    )
}