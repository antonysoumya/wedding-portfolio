// Grace & Forever — 120-photo wedding album data.
// Photos are generated from per-chapter templates so every object carries the
// full shape: id, image, title, chapter, caption, orientation, tone, featured,
// focusPosition, theme.

import { asset } from '../utils/asset.js'

const FOCUS_POOL = [
  'center center',
  'center top',
  'center bottom',
  'left center',
  'right center',
]

// Chapter definitions. `from`/`to` are inclusive photo numbers (1..120).
const CHAPTERS = [
  {
    key: 'bride',
    label: 'Bride',
    from: 1,
    to: 15,
    tone: 'lavender-bridal',
    theme: 'lavender',
    titles: [
      'Grace in White', 'The Veil', 'Quiet Radiance', 'First Light',
      'Lace & Lavender', 'A Bride’s Prayer', 'Soft Beginnings', 'Her Bouquet',
      'The Gown', 'Blushing Grace', 'Whispered Vows', 'Bridal Glow',
      'Pearls & Promise', 'Ready for Forever', 'She Walks in Beauty',
    ],
    captions: [
      'She walks with grace, carrying dreams and a forever promise.',
      'A veil of lace, a heart full of quiet hope.',
      'Morning light finds her, radiant and calm.',
      'Every detail whispers of the love to come.',
      'Lavender in her hands, faith in her heart.',
      'A prayer before the aisle, tender and true.',
      'Beauty held gently in a single frame.',
      'Flowers gathered like the years ahead.',
      'The gown that carries a lifetime of dreams.',
      'Blushing, breathless, beautifully ready.',
      'Words unspoken, love already sure.',
      'A glow that no candle could rival.',
      'Pearls of grace, a promise made bright.',
      'One last breath before forever begins.',
      'She walks in beauty, blessed and beloved.',
    ],
  },
  {
    key: 'groom',
    label: 'Groom',
    from: 16,
    to: 30,
    tone: 'burgundy-rich',
    theme: 'burgundy',
    titles: [
      'The Vow Keeper', 'Steady Heart', 'Boutonnière', 'A Quiet Strength',
      'The Waiting', 'His Promise', 'Cufflinks & Faith', 'The First Look',
      'Standing Tall', 'A Gentleman’s Grace', 'The Ring Bearer', 'Ready & Sure',
      'Burgundy & Gold', 'His Prayer', 'For a Lifetime',
    ],
    captions: [
      'A moment of pride and a heart full of love.',
      'A steady heart waiting for forever.',
      'A single rose pinned close, love worn openly.',
      'Quiet strength dressed in burgundy and grace.',
      'Waiting at the altar, hopeful and sure.',
      'His promise to walk together for a lifetime.',
      'Small details, a faithful and certain heart.',
      'The first look — the world falls away.',
      'Standing tall for the love of his life.',
      'Grace in his eyes, a gentleman’s calm.',
      'Guarding the rings, guarding a promise.',
      'Ready and sure, waiting for her.',
      'Burgundy and gold, dignity and devotion.',
      'A prayer of thanks before the vows.',
      'A promise made once, kept for a lifetime.',
    ],
  },
  {
    key: 'together',
    label: 'Together',
    from: 31,
    to: 45,
    tone: 'wedding-soft',
    theme: 'lavender',
    titles: [
      'First Glance', 'Hand in Hand', 'Golden Hour', 'Our Story',
      'Whispers', 'Two Hearts', 'The Lavender Field', 'Closer',
      'A Shared Smile', 'Forehead Kiss', 'Slow Dance', 'Us',
      'Timeless', 'Beginning', 'Together Before Forever',
    ],
    captions: [
      'In every glance, a promise; in every smile, a beginning.',
      'Hand in hand, the future feels like home.',
      'Golden hour holds the two of them gently.',
      'Their story, written in light and laughter.',
      'Whispered secrets meant only for two.',
      'Two hearts learning the rhythm of one.',
      'Lavender all around, love at the center.',
      'A little closer, a little more forever.',
      'A shared smile that says everything.',
      'A kiss on the forehead, a lifetime of care.',
      'A slow dance before the world was watching.',
      'Just us, and that was always enough.',
      'Timeless and tender, held in soft light.',
      'Together is where forever starts.',
      'Before the vows, already sure of us.',
    ],
  },
  {
    key: 'ceremony',
    label: 'Ceremony',
    from: 46,
    to: 70,
    tone: 'church-golden',
    theme: 'church',
    titles: [
      'The Entrance', 'Down the Aisle', 'At the Altar', 'The Vows',
      'The Rings', 'The Blessing', 'The First Prayer', 'Candlelight',
      'Before God', 'Joined Hands', 'The First Kiss', 'Man & Wife',
      'The Recessional', 'Sacred Yes', 'Holy Union', 'Gathered in Love',
      'The Scripture', 'A Ring of Gold', 'Tears of Joy', 'The Amen',
      'Under the Arch', 'The Unity', 'Blessed Vows', 'One Promise',
      'The Covenant',
    ],
    captions: [
      'Before God, family, and love, two hearts became one.',
      'Each step down the aisle, a step toward forever.',
      'At the altar, heaven felt a little closer.',
      'Vows spoken softly, meant for eternity.',
      'Rings exchanged, a circle without end.',
      'A blessing poured over two joined lives.',
      'The first prayer as one before the Lord.',
      'Candlelight and quiet, a sacred hush.',
      'Standing before God, humble and sure.',
      'Hands joined, hearts sealed as one.',
      'Today, love became a promise — the first kiss.',
      'Pronounced man and wife, forever begun.',
      'Walking out together into a shared life.',
      'A sacred yes that echoes through the years.',
      'A holy union blessed by faith and love.',
      'Gathered in love, witnessed by grace.',
      'Words of scripture wrapping the two of them.',
      'A ring of gold, a bond of faith.',
      'Tears of joy for a prayer answered.',
      'The amen that carried a whole lifetime.',
      'Under the arch, beneath a sky of blessing.',
      'Two flames becoming one bright light.',
      'Blessed vows, patient and kind and true.',
      'One promise, one faith, one forever.',
      'A covenant of love before all who love them.',
    ],
  },
  {
    key: 'family',
    label: 'Family',
    from: 71,
    to: 85,
    tone: 'wedding-soft',
    theme: 'burgundy',
    titles: [
      'Blessed by Family', 'Mother’s Love', 'Father’s Pride', 'Generations',
      'A Warm Embrace', 'The Elders’ Blessing', 'Loved Ones', 'Joyful Hearts',
      'Side by Side', 'Prayers & Smiles', 'The Gathering', 'Held Close',
      'Grateful', 'Surrounded by Love', 'Love Around Us',
    ],
    captions: [
      'The day was made warmer by the people who love us.',
      'A mother’s love, gentle and endless.',
      'A father’s pride, quiet and deep.',
      'Generations gathered under one blessing.',
      'A warm embrace worth more than words.',
      'The elders’ blessing over a new beginning.',
      'Loved ones who prayed, smiled, and celebrated.',
      'Joyful hearts filling every corner.',
      'Side by side, the family they were given.',
      'Prayers and smiles wrapped around the day.',
      'The gathering of everyone who matters most.',
      'Held close by the ones who came before.',
      'Grateful for every hand and heart here.',
      'Surrounded by love on every side.',
      'Love around us, blessing all we do.',
    ],
  },
  {
    key: 'reception',
    label: 'Reception',
    from: 86,
    to: 105,
    tone: 'reception-wine',
    theme: 'reception',
    titles: [
      'A Night of Joy', 'The First Dance', 'Toast to Forever', 'The Cake',
      'Laughter', 'Candlelit Tables', 'Confetti', 'Wine & Roses',
      'Golden Evening', 'The Sparklers', 'Dancing Hearts', 'A Sweet Moment',
      'Cheers', 'The Celebration', 'Music & Light', 'Twirl',
      'Under the Lights', 'Joy Uncontained', 'The Last Dance', 'Evening Glow',
    ],
    captions: [
      'The evening glowed with laughter, music, and memory.',
      'The first dance, the whole world softening.',
      'A toast raised high to a beautiful forever.',
      'Sweetness shared, a cake and a kiss.',
      'Laughter that spilled into the night.',
      'Candlelit tables and hearts wide open.',
      'Confetti falling like small blessings.',
      'Wine and roses, warmth and welcome.',
      'A golden evening none will forget.',
      'Sparklers writing joy across the dark.',
      'Dancing hearts and endless smiles.',
      'A sweet moment stolen from the crowd.',
      'Cheers to love, to faith, to forever.',
      'The celebration in full, glorious bloom.',
      'Music and light and everyone we love.',
      'One more twirl beneath the glow.',
      'Under the lights, only the two of them.',
      'Joy that simply could not be contained.',
      'The last dance, the day held close.',
      'Evening glow settling like a blessing.',
    ],
  },
  {
    key: 'forever',
    label: 'Forever',
    from: 106,
    to: 120,
    tone: 'editorial-bw',
    theme: 'forever',
    titles: [
      'Smile', 'Vows', 'Grace', 'Together', 'Forever', 'Blessings',
      'The Quiet After', 'Still Us', 'Faith', 'The Promise Kept',
      'Homeward', 'A New Chapter', 'Hand in Hand', 'Always', 'The Story Continues',
    ],
    captions: [
      'A smile that will outlast the years.',
      'The vows still echoing, soft and sure.',
      'Grace in the ordinary and the extraordinary.',
      'Together, now and for all the days.',
      'Forever, spelled out in every frame.',
      'Blessings counted, one by tender one.',
      'The quiet after the joy, still full of love.',
      'Still us, still sure, still forever.',
      'Faith that carried them here will carry them on.',
      'A promise made and beautifully kept.',
      'Homeward, hand in hand, hearts at rest.',
      'A new chapter opening softly.',
      'Hand in hand into all that comes.',
      'Always — the only word that fits.',
      'The story continues, blessed and unending.',
    ],
  },
]

// Editorial "magazine word" tags for the Forever chapter.
const FOREVER_WORDS = ['SMILE', 'VOWS', 'GRACE', 'TOGETHER', 'FOREVER', 'BLESSINGS']

// Which source photo (wedding_NNN.jpg) fills each album slot, chosen by actual
// content so every section shows the right people/moment. Lengths match each
// chapter's slot count (15/15/15/25/15/20/15).
const SOURCES = {
  // Bride — solo bride first (31,32,45,46), then bride-forward frames.
  bride: [31, 32, 45, 46, 8, 9, 33, 10, 11, 7, 6, 5, 4, 3, 2],
  // Groom — solo groom + getting-ready details.
  groom: [39, 40, 41, 42, 43, 83, 84, 85, 86, 87, 88, 89, 90, 37, 38],
  // Together / pre-wedding — couple outdoor shoot + romantic couple frames.
  together: [1, 12, 13, 14, 15, 16, 17, 18, 97, 98, 99, 106, 107, 108, 109],
  // Ceremony — cross/rings/pew details, altar, and church couple portraits.
  ceremony: [
    34, 35, 36, 44, 47, 48, 49, 50, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 91, 92, 93,
  ],
  // Family & blessings — family groups + couple with elders/guests.
  family: [22, 23, 111, 112, 113, 114, 115, 116, 44, 54, 55, 20, 21, 110, 109],
  // Reception — engagement/reception stage + white-gown reception + evening.
  reception: [
    19, 24, 25, 26, 27, 28, 29, 30, 51, 52, 53, 56, 57, 58, 59, 60, 61, 62, 117,
    118,
  ],
  // Forever — emotional closing montage across the day.
  forever: [63, 64, 65, 66, 67, 68, 100, 101, 102, 103, 104, 105, 119, 120, 96],
}

function pad(n) {
  return String(n).padStart(3, '0')
}

function buildPhotos() {
  const photos = []
  CHAPTERS.forEach((ch) => {
    let idx = 0
    for (let n = ch.from; n <= ch.to; n++) {
      const srcNum = (SOURCES[ch.key] && SOURCES[ch.key][idx]) || n
      const image = asset(`images/wedding_${pad(srcNum)}.jpg`)
      // Vary orientation: portrait-leaning albums with occasional wide/square.
      const orientation =
        idx % 5 === 0 ? 'landscape' : idx % 7 === 3 ? 'square' : 'portrait'
      const featured = idx === 0 || (ch.key === 'ceremony' && idx === 10)
      const photo = {
        id: n,
        image,
        title: ch.titles[idx % ch.titles.length],
        chapter: ch.label,
        chapterKey: ch.key,
        caption: ch.captions[idx % ch.captions.length],
        orientation,
        tone: ch.tone,
        featured,
        focusPosition: FOCUS_POOL[(n + idx) % FOCUS_POOL.length],
        theme: ch.theme,
      }
      if (ch.key === 'forever') {
        photo.word = FOREVER_WORDS[idx % FOREVER_WORDS.length]
        // Alternate between editorial B&W and warm color for the magazine feel.
        photo.tone = idx % 2 === 0 ? 'editorial-bw' : 'wedding-soft'
      }
      photos.push(photo)
      idx++
    }
  })
  return photos
}

export const PHOTOS = buildPhotos()

// Helper accessors used across sections.
export const getRange = (from, to) => PHOTOS.filter((p) => p.id >= from && p.id <= to)
export const getByChapter = (key) => PHOTOS.filter((p) => p.chapterKey === key)

export const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'bride', label: 'Bride' },
  { key: 'groom', label: 'Groom' },
  { key: 'together', label: 'Together' },
  { key: 'ceremony', label: 'Ceremony' },
  { key: 'family', label: 'Family' },
  { key: 'reception', label: 'Reception' },
  { key: 'forever', label: 'Forever' },
]

// Poster + video used by the highlight section.
export const VIDEO = {
  src: asset('videos/wedding-highlight.mp4'),
  poster: asset('images/wedding_106.jpg'),
}

export default PHOTOS
