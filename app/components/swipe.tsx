/* eslint-disable @next/next/no-img-element */
import Glide from "@glidejs/glide";
import { useEffect } from "react";

const Swipe = () => {
  const ArrowDisabler = (Glide: any, Components: any) => {
    return {
      mount() {
        // Only in effect when rewinding is disabled
        if (Glide.settings.rewind) {
          return;
        }
        Glide.on(["mount.after", "run"], () => {
          // Filter out arrows_control
          for (const controlItem of Components.Controls.items) {
            if (controlItem.className !== "glide__arrows") {
              continue;
            }

            // Set left arrow state
            const left = controlItem.querySelector(".glide__arrow--left");
            if (left) {
              if (Glide.index === 0) {
                left.classList.add("is-disabled"); // Disable on first slide
              } else {
                left.classList.remove("is-disabled"); // Enable on other slides
              }
            }

            // Set right arrow state
            const right = controlItem.querySelector(".glide__arrow--right");
            if (right) {
              if (
                Glide.index ===
                Components.Sizes.length - Glide.settings.perView
              ) {
                right.classList.add("is-disabled"); // Disable on last slide
              } else {
                right.classList.remove("is-disabled"); // Disable on other slides
              }
            }
          }
        });
      },
    };
  };

  useEffect(() => {
    console.log("Glide Started");
    new Glide(".glide", {
      type: "slider",
      bound: true,
      perView: 6,
      peek: { before: 0, after: 0 },
      startAt: 0,
      rewind: false,
      gap: 16,
      dragThreshold: false,
      breakpoints: {
        1200: {
          perView: 5,
          peek: {
            before: 0,
            after: 0,
          },
        },
        992: {
          perView: 6,
          peek: {
            before: 0,
            after: 0,
          },
        },
        768: {
          perView: 3,
          peek: {
            before: 0,
            after: 0,
          },
        },
        575: {
          perView: 3,
          peek: {
            before: 0,
            after: 0,
          },
        },
        450: {
          perView: 2,
          peek: {
            before: 0,
            after: 0,
          },
        },
      },
      keyboard: false,
    }).mount({ ArrowDisabler });
  });

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/10/768/1024"
                alt="Lorem Ipsum 1"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/17/768/1024"
                alt="Lorem Ipsum 2"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/25/768/1024"
                alt="Lorem Ipsum 3"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/12/768/1024"
                alt="Lorem Ipsum 1"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/19/768/1024"
                alt="Lorem Ipsum 2"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/27/768/1024"
                alt="Lorem Ipsum 3"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/11/768/1024"
                alt="Lorem Ipsum 1"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/18/768/1024"
                alt="Lorem Ipsum 2"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://picsum.photos/768/1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://picsum.photos/id/26/768/1024"
                alt="Lorem Ipsum 3"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=4"></button>
        <button className="glide__bullet" data-glide-dir="=5"></button>
        <button className="glide__bullet" data-glide-dir="=6"></button>
        <button className="glide__bullet" data-glide-dir="=7"></button>
        <button className="glide__bullet" data-glide-dir="=8"></button>
        <button className="glide__bullet" data-glide-dir="=9"></button>
      </div>
    </div>
  );
};

export default Swipe;
