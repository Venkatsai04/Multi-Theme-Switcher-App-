// Home.tsx
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { setTheme, type ThemeName } from '../slices/themeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as ThemeName;
    dispatch(setTheme(selected));
  };

  return (
    <div
      className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-white"
      style={{
        fontFamily: 'Inter, Noto Sans, sans-serif',
      }}
    >

      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center px-12">
            App Name
          </h2>
        </div>


        <h3 className="text-[#121417] text-lg font-bold tracking-[-0.015em] px-4 pb-2 pt-4 text-center">Theme</h3>
        <div className="flex justify-center items-center w-[300px] flex-wrap gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <select
              value={currentTheme}
              onChange={handleThemeChange}
              className="form-input flex w-full flex-1 rounded-xl border border-[#dde0e4] bg-white h-14 p-[15px] text-base font-normal leading-normal text-[#121417] placeholder:text-[#677583] focus:outline-none focus:ring-0"
            >
              <option value="theme1">Minimalist (Theme 1)</option>
              <option value="theme2">Dark Sidebar (Theme 2)</option>
              <option value="theme3">Colorful Cards (Theme 3)</option>
            </select>
          </label>
        </div>

        <h1 className="text-[#121417] text-[22px] font-bold text-center px-4 pb-3 pt-5">
          Welcome to Our App
        </h1>
        <p className="text-[#121417] text-base text-center px-4 pb-3 pt-1">
          Explore the features and enjoy the experience. We're excited to have you on board.
        </p>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Quick Access Card */}
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_Sn0MSjlN33B6TuHNX-7ksgfYFlNTToii5NM5A3WEi-vaIBy5ZCiuHrGK0sB6A73ka1o0ZQS6BawQtOtwJy30_kTQN_kSjVbEsu7LnWBnd-zKT6ejJ554Yl760DByHiIfQvYcPMhaRPNBPqp9m65Xuv2uEYiKVZxkQ1ZXgDlc1cK-FsFaPgCxEg6FybUcVXbSWZAx2dhKaYiwwmgeyreNA0aG20PzpoSZQMb07iwHgB1b6vsr8LRWz0PzeCWHxCtjt2v7dEjAsady")`,
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-2xl font-bold leading-tight">Quick Access</p>
                <p className="text-white text-base font-medium leading-normal">
                  Jump to your most used features
                </p>
              </div>
            </div>
          </div>

          {/* Notifications Card */}
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAy0YiRiMp_crMoCLnIs7-s2saB4Xgo1vgLgh2qETYHIaLluu-W9NhkyjyA-lhojrCsBK9sJLB3LqXu5VAUkrUJjsLPRIyv4IVwWfEZ4wcNdgJKqOxSDlgjq2CDhAfJSEDzMIDoA-KCM41OO1krvRkiGnfotrxmZ5do9-B7QAkSlYMmp9MFwgOffY5I6P0jNfY0bmx2zwFrqHCaFX0zJ4_dIuq3BtbP6lqwCIqG7Z0L48FS0WgamygocJ6CckTJYGrpniMjg2Zrlzqy")`,
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-2xl font-bold leading-tight">Notifications</p>
                <p className="text-white text-base font-medium leading-normal">
                  Stay updated with recent activities
                </p>
              </div>
            </div>
          </div>
        </div>




        <div className="flex px-4 py-3 justify-center">
          <button className="min-w-[84px] rounded-xl bg-[#d2e2f3] px-4 py-2 text-sm font-bold text-[#121417] cursor-pointer scale-110">
            Get Started
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
