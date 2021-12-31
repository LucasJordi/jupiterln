import Dexie, { Table } from 'dexie';
import { Novel } from 'src/app/models/novel.dto';
import { NovelChapter } from 'src/app/models/novelChapter.dto';




export class AppDB extends Dexie {
  novel!: Table<Novel, number>;
  novelChapter!: Table<NovelChapter, number>;

  constructor() {
    super('jupiterLn');
    this.version(3).stores({
        novelChapter: '++id',
        novel: '++id, novelChapterId',
    });
    
  }
}

export const db = new AppDB();