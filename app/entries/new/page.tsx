import { createEntry } from '@/app/entries/actions';
import BackButton from '@/app/entries/components/backButton';

export default function NewEntryPage() {
  return (
    <main>
      <BackButton />
      <h1>New Entry</h1>
      <form action={createEntry}>
        <input name="title" placeholder="Title" required />
        <input name="tag" placeholder="Tag" required />
        <button type="submit">Create Entry</button>
      </form>
    </main>
  );
}
