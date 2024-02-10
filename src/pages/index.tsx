import React, { ReactNode, useState, useMemo } from 'react';

import Main from '@/app/layout/Main';

import LatteThumb from '@/app/assets/Images/late-nav-thumb-50x100.jpg';
import LatteBG from '@/app/assets/Images/latte-bg.jpg';
import LatteCup from '@/app/assets/Images/latte-cup.png';
import LatteSpoon from '@/app/assets/Images/latte-spoon-1.png';
import LatteLeaf from '@/app/assets/Images/latte-leaf.png';

import MacchiatoThumb from '@/app/assets/Images/irish-nav-thumb-50x100.jpg';
import MacchiatoBG from '@/app/assets/Images/irish-bg.jpg';
import MacchiatoCup from '@/app/assets/Images/irish-cup.png';
import MacchiatoSpoon from '@/app/assets/Images/irish-spoon-1.png';
import MacchiatoLeaf from '@/app/assets/Images/irish-leaf.png';

import BlackThumb from '@/app/assets/Images/black-nav-thumb-50x100.jpg';
import BlackBG from '@/app/assets/Images/blac-bg.jpg';
import BlackCup from '@/app/assets/Images/black-cup.png';
import BlackSpoon from '@/app/assets/Images/black-spoon.png';
import BlackLeaf from '@/app/assets/Images/black-leaf.png';

import EspressoThumb from '@/app/assets/Images/espresso-nav-thumb-50x100.jpg';
import EspressoBG from '@/app/assets/Images/espresso-bg.jpg';
import EspressoCup from '@/app/assets/Images/espresso-cup.png';
import EspressoSpoon from '@/app/assets/Images/espresso-spoon.png';
import EspressoLeaf from '@/app/assets/Images/espresso-leaf.png';

import MochaThumb from '@/app/assets/Images/mocha-nav-thumb-50x100.jpg';
import MochaBG from '@/app/assets/Images/mocha-bg.jpg';
import MochaCup from '@/app/assets/Images/mocha-cup.png';
import MochaSpoon from '@/app/assets/Images/mocha-spoon-1.png';
import MochaLeaf from '@/app/assets/Images/mocha-leaf.png';

import CupShadow from '@/app/assets/Images/cup-shadow-1.png';
import Bean1 from '@/app/assets/Images/bean1.png';
import Bean2 from '@/app/assets/Images/bean2.png';
import Bean3 from '@/app/assets/Images/bean3.png';

const menu = [
  {
    count: '01 / 05',
    title: 'Latte',
    description:
      "Latte is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffe e latte, caffelatte or caffellatte, which means 'coffee & milk'.",
    background: LatteBG.src,
    cup: LatteCup.src,
    spoon: LatteSpoon.src,
    leaf: LatteLeaf.src,
  },
  {
    count: '02 / 05',
    title: 'Macchiato',
    description:
      'Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.',
    background: MacchiatoBG.src,
    cup: MacchiatoCup.src,
    spoon: MacchiatoSpoon.src,
    leaf: MacchiatoLeaf.src,
  },
  {
    count: '03 / 05',
    title: 'Black Coffee',
    description:
      'Delicious coffee should be simply coffee with nothing added, unless you add it yourself.',
    background: BlackBG.src,
    cup: BlackCup.src,
    spoon: BlackSpoon.src,
    leaf: BlackLeaf.src,
  },
  {
    count: '04 / 05',
    title: 'Espresso',
    description:
      'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9 - 10 bars of pressure through finely-ground coffee beans.',
    background: EspressoBG.src,
    cup: EspressoCup.src,
    spoon: EspressoSpoon.src,
    leaf: EspressoLeaf.src,
  },
  {
    count: '05 / 05',
    title: 'Mocha',
    description:
      'A caffè mocha, is a chocolate-flavoured variant of a caffè latte. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffee trade.',
    background: MochaBG.src,
    cup: MochaCup.src,
    spoon: MochaSpoon.src,
    leaf: MochaLeaf.src,
  },
];

export default function Index() {
  const [selectedMenu, setSelectedMenu] = useState({
    count: '01/05',
    title: 'Latte',
    description:
      "Latte is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffe e latte, caffelatte or caffellatte, which means 'coffee & milk'.",
    background: LatteBG.src,
    cup: LatteCup.src,
    spoon: LatteSpoon.src,
    leaf: LatteLeaf.src,
  });

  const handleMenuChange = useMemo(
    () => (menuIndex: number) => {
      const filteredMenu = menu.filter((_, index) => index === menuIndex)[0];
      setSelectedMenu(filteredMenu);
    },
    [menu]
  );

  return (
    <>
      <section style={{ position: 'relative' }}>
        <div className="menu-button">
          <div>
            <button
              onClick={() => handleMenuChange(0)}
              style={{ backgroundImage: `url(${LatteThumb.src})` }}
            />
          </div>
          <div>
            <button
              onClick={() => handleMenuChange(1)}
              style={{ backgroundImage: `url(${MacchiatoThumb.src})` }}
            />
          </div>
          <div>
            <button
              onClick={() => handleMenuChange(2)}
              style={{ backgroundImage: `url(${BlackThumb.src})` }}
            />
          </div>
          <div>
            <button
              onClick={() => handleMenuChange(3)}
              style={{ backgroundImage: `url(${EspressoThumb.src})` }}
            />
          </div>
          <div>
            <button
              onClick={() => handleMenuChange(4)}
              style={{ backgroundImage: `url(${MochaThumb.src})` }}
            />
          </div>
        </div>
        <div className="menu-wrapper">
          <div
            className="menu-hero"
            style={{ backgroundImage: `url(${selectedMenu.background})` }}
          >
            <img
              loading="lazy"
              className="hero-group-spoon"
              src={selectedMenu.spoon}
            />
            <img
              loading="lazy"
              className="hero-group-cup"
              src={selectedMenu.cup}
            />
            <img
              loading="lazy"
              className="hero-group-cup-shadow"
              src={CupShadow.src}
            />
            <img
              loading="lazy"
              className="hero-group-leaf"
              src={selectedMenu.leaf}
            />
            <img loading="lazy" className="hero-group-bean1" src={Bean1.src} />
            <img loading="lazy" className="hero-group-bean2" src={Bean2.src} />
            <img loading="lazy" className="hero-group-bean3" src={Bean3.src} />
          </div>
          <div className="menu-cont">
            <div className="cont">
              <div>
                <h5 className="font-18">{selectedMenu.count}</h5>
              </div>
              <div>
                <h1 className="font-60">{selectedMenu.title}</h1>
              </div>
              <div>
                <p className="w-85 font-20">{selectedMenu.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Index.Layout = function Layout(page: ReactNode) {
  return <Main>{page}</Main>;
};
