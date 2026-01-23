import { MovieImages } from '../assets/images';

export interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  isNew?: boolean;
  isTop10?: boolean;
  genre?: string[];
}
export const NETFLIX_MOVIES: Movie[] = [
  { id: 15, title: '이 사랑 통역 되나요 (Love)', thumbnail: MovieImages.love, genre: ['로맨스'] },
  { id: 4, title: '모범택시 3', thumbnail: MovieImages.taxiDriver3, isNew: true, genre: ['액션', '범죄'] },
  { id: 16, title: '중증외상센터', thumbnail: MovieImages.hospital, isNew: true, genre: ['의학', '액션'] },
  { id: 18, title: '프로보노', thumbnail: MovieImages.probono, genre: ['드라마'] },
  { id: 17, title: '폭싹 속았수다', thumbnail: MovieImages.pogsag, isNew: true, genre: ['시대극', '드라마'] },
  { id: 6, title: '러브 미', thumbnail: MovieImages.loveMe, isNew: true, genre: ['로맨스'] },
  { id: 11, title: '굿닥터', thumbnail: MovieImages.gooddoctor, genre: ['의학', '드라마'] },
  { id: 9, title: '루키', thumbnail: MovieImages.rookie, genre: ['범죄', '드라마'] },
  { id: 10, title: '브리저튼', thumbnail: MovieImages.bridgerton, isNew: true, genre: ['시대극', '로맨스'] },
  { id: 5, title: '매니페스트', thumbnail: MovieImages.manifest, genre: ['SF', '스릴러'] },
  { id: 13, title: '에밀리 파리에 가다', thumbnail: MovieImages.emily, genre: ['로맨틱 코미디'] },
  { id: 19, title: '스파르타쿠스', thumbnail: MovieImages.sparta, isTop10: true, genre: ['액션', '드라마'] },
  { id: 14, title: '응답하라 1988', thumbnail: MovieImages.answer, genre: ['가족', '코미디'] },
  { id: 8, title: '백일의 낭군님', thumbnail: MovieImages.hundredDaysPrince, genre: ['사극', '로맨스'] },
  { id: 12, title: '아이돌아이', thumbnail: MovieImages.idoli, isNew: true, genre: ['드라마'] },
  { id: 1, title: '도깨비', thumbnail: MovieImages.dokkaebi, isTop10: true, genre: ['판타지', '로맨스'] },
  { id: 2, title: '환혼', thumbnail: MovieImages.hwanhon, isNew: true, genre: ['무협', '판타지'] },
  { id: 3, title: '사랑의 불시착', thumbnail: MovieImages.crashLanding, genre: ['로맨스', '코미디'] },
  { id: 7, title: '이 사랑 통역 되나요', thumbnail: MovieImages.interpreter, isNew: true, genre: ['로맨스', '코미디'] },
];

export const NEW_RELEASES = NETFLIX_MOVIES.filter(movie => movie.isNew);
export const TOP_10_MOVIES = NETFLIX_MOVIES.filter(movie => movie.isTop10);