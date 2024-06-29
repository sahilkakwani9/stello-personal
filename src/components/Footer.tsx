/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import MobileFooterSVG from "./Footer/MobileFooter";
import { DesktopFooterSVG } from "./Footer/DesktopFooter";

function Footer() {
  return (
    <div className="justify-center items-center relative overflow-hidden">
      <div id="radial_overlay" className="hidden md:block"></div>
      <img
        src="/footer-top-blend.png"
        alt="footer-blend"
        className="hidden md:block absolute top-0 left-0 z-10"
      />
        <img
        src="/footer-top-blend-mobile.png"
        alt="footer-blend"
        className="md:hidden absolute top-0 left-0 z-10"
      />
      <Image
        src="/footer-logo.webp"
        width={100}
        height={140}
        alt="Stello"
        className="absolute bottom-[33%] left-[30%] md:left-[44%] md:bottom-4 md:my-48 w-[40%] object-contain lg:my-40 md:w-[10%] md:mr-8 z-10"
      />
      {/* <img
        alt="footer-net-phone"
        src="footer-net-mobile.svg"
        className="w-screen -z-10 md:hidden object-cover"
      /> */}
      <FooterSVG />
      <MobileFooterSVG />
      {/* <DesktopFooterSVG /> */}
    </div>
  );
}

export default Footer;

const FooterSVG = () => {
  return (
    <div className="w-screen h-full bg-black ">
      <svg
        width="1434"
        height="599"
        viewBox="0 0 1434 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:block absolute md:top-[20.3%] lg:top-[4.6rem] xl:-top-[2.6%] opacity-70  w-screen object-contain"
      >
        <path
          d="M1432.49 502.332L1388.17 477.604L1331.24 448.253L1275.72 422.717L1221.94 401.669L1170.21 385.804L1120.94 375.751L1074.46 372.07L1024.38 374.113L979.14 380.665L938.547 391.166L902.441 405.169L870.555 422.201"
          stroke="url(#paint0_linear_346_57)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M564.662 480.312L542.11 484.845L516.888 495.213L488.839 512.065L462.696 533.562L434.894 562.845L405.543 599.31L374.868 642.26L342.981 690.931L312.598 740.41"
          stroke="url(#paint1_linear_346_57)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1087.02 740.424L1085.47 737.865L1051.88 684.886L1019.41 636.82L988.215 594.432L958.46 558.506L930.343 529.693L903.999 508.667L875.837 492.264L850.57 482.323L828.086 478.172"
          stroke="url(#paint2_linear_346_57)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1432.5 0L1419.06 1.61559L1364.6 10.4791L1310.67 22.1027L1257.67 37.0029L1205.99 55.6279L1156.09 78.4039L1108.38 105.735L1056.28 141.325L1008.57 178.44L965.284 216.654L926.329 255.564L891.615 294.811L861.029 334.058L834.438 373.014L811.617 411.363"
          stroke="url(#paint3_linear_346_57)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M557.663 373.49L530.511 334.647L499.365 295.49L464.112 256.356L424.641 217.58L380.861 179.5L332.683 142.542L280.152 107.11L232.131 79.9352L181.979 57.294L130.121 38.8257L77.0287 24.1057L23.0616 12.6613L-0.5 8.91406"
          stroke="url(#paint4_linear_346_57)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M522.32 425.683L490.209 409.279L453.902 395.973L413.174 386.256L367.846 380.601L317.738 379.547L271.333 384.147L222.213 395.187L170.714 412.107L117.218 434.277L62.0167 461.003L5.46874 491.565L-0.5 495.043"
          stroke="url(#paint5_linear_346_57)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_346_57"
            x1="1383"
            y1="448.137"
            x2="1104.55"
            y2="218.575"
            gradientUnits="userSpaceOnUse"
          >
            {Array.from({ length: 10 }).map((item, index) => {
              return (
                <motion.stop
                  offset={index / 10}
                  key={index}
                  stop-color="#DD1D63"
                  animate={{
                    stopColor: Array.from({ length: 11 }).map(
                      (innerItem, innerIndex) => {
                        if (innerIndex === index) {
                          return "#FFFFFF90";
                        }
                        return "#DD1D63";
                      }
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </linearGradient>
          <linearGradient
            id="paint1_linear_346_57"
            x1="318.587"
            y1="466.766"
            x2="511.081"
            y2="367.056"
            gradientUnits="userSpaceOnUse"
          >
            {Array.from({ length: 10 }).map((item, index) => {
              return (
                <motion.stop
                  offset={index / 10}
                  key={index}
                  stop-color="#DD1D63"
                  animate={{
                    stopColor: Array.from({ length: 11 }).map(
                      (innerItem, innerIndex) => {
                        if (innerIndex === index) {
                          return "#ffffff90";
                        }
                        return "#DD1D63";
                      }
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </linearGradient>
          <linearGradient
            id="paint2_linear_346_57"
            x1="796.053"
            y1="464.513"
            x2="1141.85"
            y2="552.272"
            gradientUnits="userSpaceOnUse"
          >
            {Array.from({ length: 10 }).map((item, index) => {
              return (
                <motion.stop
                  offset={index / 10}
                  key={index}
                  stop-color="#DD1D63"
                  animate={{
                    stopColor: Array.from({ length: 11 }).map(
                      (innerItem, innerIndex) => {
                        if (innerIndex === 10 - index) {
                          return "#ffffff80";
                        }
                        return "#DD1D63";
                      }
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </linearGradient>
          <linearGradient
            id="paint3_linear_346_57"
            x1="805.376"
            y1="-25.1651"
            x2="1534.43"
            y2="191.286"
            gradientUnits="userSpaceOnUse"
          >
            {Array.from({ length: 10 }).map((item, index) => {
              return (
                <motion.stop
                  key={index}
                  offset={index / 10}
                  stopColor="#DD1D63"
                  animate={{
                    stopColor: Array.from({ length: 11 }).map(
                      (innerItem, innerIndex) => {
                        if (innerIndex === 10 - index) {
                          return "#ffffff90";
                        }
                        return "#DD1D63";
                      }
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </linearGradient>
          <linearGradient
            id="paint4_linear_346_57"
            x1="10.2077"
            y1="-15.7613"
            x2="695.2"
            y2="177.594"
            gradientUnits="userSpaceOnUse"
          >
            {Array.from({ length: 10 }).map((item, index) => {
              return (
                <motion.stop
                  offset={index / 10}
                  key={index}
                  stop-color="#DD1D63"
                  animate={{
                    stopColor: Array.from({ length: 11 }).map(
                      (innerItem, innerIndex) => {
                        if (innerIndex === index) {
                          return "#ffffff90";
                        }
                        return "#DD1D63";
                      }
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </linearGradient>
          <linearGradient
            id="paint5_linear_346_57"
            x1="39"
            y1="468.639"
            x2="451.472"
            y2="581.848"
            gradientUnits="userSpaceOnUse"
          >
            {Array.from({ length: 10 }).map((item, index) => {
              return (
                <motion.stop
                  offset={index / 10}
                  key={index}
                  stop-color="#DD1D63"
                  animate={{
                    stopColor: Array.from({ length: 11 }).map(
                      (innerItem, innerIndex) => {
                        if (innerIndex === index) {
                          return "#ffffff90";
                        }
                        return "#DD1D63";
                      }
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="1434"
        height="599"
        viewBox="0 0 1434 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block bg-black w-screen object-contain"
      >
        <g clip-path="url(#clip0_421_152)">
          <rect
            width="1433"
            height="599"
            transform="translate(0.5)"
            fill="black"
          />
          <path
            d="M616.5 474.002C579.456 413.405 546.175 349.981 500.365 295.49L465.112 256.356L425.641 217.58L381.861 179.5L333.683 142.542L281.152 107.11L233.131 79.9352L182.979 57.294L131.121 38.8257L78.0287 24.1057L24.0616 12.6613L0.5 8.91406"
            stroke="url(#paint0_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.5 579.508L10.6425 593.128L86.9596 667.852L165.835 725.275"
            stroke="url(#paint1_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.5 465.133L6.46874 476.419L64.2732 552.468L135.205 620.729L217.985 680.081L303.3 725.275"
            stroke="url(#paint2_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.5 22.7612L1420.05 -13.5234L1382.76 -80.2812"
            stroke="url(#paint3_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1218.11 725.288L1226.08 720.845L1315.66 652.337L1389.39 576.378L1433.49 514.266"
            stroke="url(#paint4_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M68.7387 -80.2812L59.3141 -67.5132L24.0616 -2.48331L0.5 62.6365"
            stroke="url(#paint5_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.5 306.648L22.0869 370.287L63.0167 445.864L116.782 515.18L182.35 577.248L258.533 631.103L343.983 675.802L437.13 710.427L499.243 725.282"
            stroke="url(#paint6_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M742.804 -80.2812L737.485 -23.5314L732.122 38.4914L727.275 99.303L722.944 158.454L719.13 215.585L715.831 270.383L713.026 322.577L710.67 371.944L708.785 418.327L707.326 461.545L706.653 487.037"
            stroke="url(#paint7_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.49 609.69L1389.4 576.367L1335.05 537.12L1281.87 501.194L1230.12 469.33L1180.12 442.291L1132.15 420.749L1086.53 405.355L1043.58 396.738L997.421 393.484L955.773 395.28L918.501 401.54L885.402 411.795L856.231 425.483L837.718 442.268L815.1 456.159L813.394 457.437L812.766 457.976L810.275 459.681"
            stroke="url(#paint8_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M194.43 -80.2812L159.603 -31.3853L131.128 23.6811L111.448 82.0022L101.305 142.97L101.507 205.936L112.907 270.158L136.423 334.829L171.721 396.964L217.318 453.692L272.362 504.293L335.822 548.005L406.551 584.178L483.34 612.115L564.795 631.233L649.46 640.995L735.83 640.95L822.335 630.762L907.358 610.23L989.218 579.286L1063.02 539.882L1126.75 493.813L1180.13 442.292L1222.95 386.53L1255.15 327.671L1276.74 266.814L1287.78 204.926L1288.36 142.925L1278.62 81.6652L1258.67 21.8639L1228.65 -35.8058L1196.22 -80.2812"
            stroke="url(#paint9_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M696.704 -80.2812L696.771 -25.5737L696.86 36.7186L696.995 97.7318L697.13 157.107L697.31 214.44L697.489 269.417L697.691 321.769L697.915 371.271L698.14 417.743L698.364 461.052L698.521 487.037"
            stroke="url(#paint10_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M941.273 -80.2812L915.58 -32.642L887.463 23.8608L861.747 80.0272L838.455 135.363L817.586 189.533L799.095 242.153L782.917 292.935L769.027 341.606L757.291 387.943L747.642 431.768L739.967 472.945L738.307 484.008"
            stroke="url(#paint11_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M820.462 327.898L800.244 371.05L783.213 412.653L769.188 452.528L774.17 461.213L777.647 470.233L778.545 474.452"
            stroke="url(#paint12_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M763.013 444.648L753.543 481.225"
            stroke="url(#paint13_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M641.833 482.347L631.735 446.107L618.226 405.02L601.913 361.936L582.659 317.079L560.377 270.652L534.93 222.945L506.23 174.229L474.231 124.861L438.911 75.2029L400.27 25.6785L358.398 -23.2849L320.318 -62.7114L300.706 -80.2812"
            stroke="url(#paint14_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M538.571 725.278L550.778 679.658L564.78 631.233L578.154 589.676L590.855 555.657L602.793 529.851L615.606 508.399L627.14 493.993L671.795 498.997L717.28 498.975L762.9 493.747L807.914 483.177L851.559 467.178L891.321 446.668L926.125 422.523L955.768 395.281L980.138 365.526L999.054 333.774L1012.47 300.609L1020.3 266.501L1022.46 231.943L1018.89 197.386L1009.56 163.301L994.409 130.09L973.607 98.3826L948.385 69.9518L919.506 45.0886L887.462 23.8608L852.77 6.33531L815.902 -7.46483L777.328 -17.4503L737.475 -23.5314L696.77 -25.5737L655.638 -23.4421L614.461 -17.0241L573.689 -6.09577L534.397 9.20765L498.673 28.0797L466.787 50.1824L438.894 75.2029L415.265 102.803L396.147 132.648L381.852 164.355L372.63 197.588L368.837 231.966L370.835 267.062L378.935 302.449L393.499 337.656L414.165 371.114L439.993 401.34L470.489 428.043L505.046 450.909L543.104 469.713L584.011 484.142L627.14 493.993L637.462 485.893L673.926 489.976L675.564 490.156L678.93 487.059H682.005H690.307L698.521 487.037H706.643H711.85L714.677 486.723L722.643 485.803L730.541 484.905L738.306 484.008L744.858 483.267L745.666 483.065L745.89 483.02L750.804 481.876L753.542 481.225L761.306 479.407L768.801 477.657L771.628 476.984L777.485 475.615L778.63 474.807L782.355 473.439L786.529 472.317L788.728 471.127L791.712 469.646L794.023 468.681L794.517 468.502L794.876 468.03L795.145 467.896L800.374 465.225L803.807 463.453L804.57 463.049L804.817 462.936L807.734 461.433L808.923 460.827L809.484 460.401L810.09 459.481L810.314 459.234L819.672 448.463L828.288 434.506L834.594 419.808L838.521 404.593L840.002 389.065L838.992 373.425L835.424 357.875L829.231 342.593L820.457 327.895L843.996 283.442L870.969 237.957L901.532 191.709L935.73 145.057L973.607 98.3826L1015.17 52.0451L1060.4 6.515L1101.63 -29.7921L1144.62 -61.9707L1173.27 -80.2812"
            stroke="url(#paint15_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M432.51 -80.2812L395.439 -55.3961L358.391 -23.2849L326.729 12.2597L300.856 50.8108L281.154 91.9652L268.072 135.274L262.103 180.242L263.741 226.378L273.525 273.098L291.97 319.817L318.741 364.404L352.624 404.863L392.926 440.721L438.949 471.553L489.843 496.933L544.775 516.5L602.804 529.851L662.987 536.651L724.337 536.606L785.821 529.515L846.43 515.176L904.998 493.522L958.157 465.831L1004.43 433.294L1043.58 396.74L1075.47 356.932L1099.95 314.678L1116.94 270.674L1126.39 225.638L1128.27 180.197L1122.62 135.004L1109.38 90.5962L1088.55 47.4897L1060.41 6.515L1026.67 -30.0617L988.316 -61.9258L959.706 -80.2812"
            stroke="url(#paint16_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M131.01 -80.2812L109.804 -51.0424L78.0299 8.96111L55.77 72.6669L43.8544 139.402L43.271 208.471L54.9844 279.134L80.072 350.447L118.219 419.135L167.878 481.988L228.129 538.176L297.893 586.826L375.871 627.127L460.67 658.296L550.788 679.658L644.518 690.564L740.178 690.497L835.95 679.12L930.017 656.187L1020.4 621.675L1101.73 577.783L1171.74 526.53L1230.12 469.332L1276.73 407.578L1311.49 342.526L1334.49 275.431L1345.85 207.349L1345.69 139.335L1334.24 72.2631L1311.67 6.96368L1278.14 -55.8448L1260.01 -80.2812"
            stroke="url(#paint17_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M887.335 -80.2812L875.667 -52.5237L852.779 6.3353L831.82 64.6558L812.836 122.034L795.804 178.066L780.725 232.347L767.531 284.609L756.176 334.582L746.617 382.042L738.763 426.809L732.502 468.748L730.55 484.905"
            stroke="url(#paint18_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.813 477.659L774.177 461.212L789.211 422.997L783.22 412.652L775.77 403.295L767.063 395.037L757.302 387.946L746.621 382.045L735.199 377.399L723.149 374.011L710.672 371.947L697.927 371.273L685.024 371.992L672.144 374.168L659.443 377.893L647.258 383.032L636.285 389.36L626.591 396.72L618.221 405.023L611.265 414.088L625.963 453.739L634.355 480.644"
            stroke="url(#paint19_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1074.55 -80.2812L1063.78 -70.1834L1026.67 -30.0617L985.916 19.6873L948.397 69.9518L914.154 120.284L883.21 170.257L855.52 219.534L831.015 267.757L809.63 314.633L791.252 359.871L775.769 403.292L763.024 444.648L769.195 452.525L761.318 479.407"
            stroke="url(#paint20_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M690.317 487.059L689.33 461.568L687.378 418.349L685.022 371.989L682.217 322.622L678.963 270.427L675.26 215.63L671.064 158.498L666.397 99.3704L661.258 38.5588L655.648 -23.4421L650.151 -80.2812"
            stroke="url(#paint21_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M264.378 -80.2812L241.108 -55.0142L208.324 -8.11567L182.989 42.1494L165.688 95.2637L157.116 150.667L157.946 207.731L168.919 265.805L190.798 324.125L223.223 380.045L264.804 430.982L314.732 476.311L372.11 515.423L435.906 547.713L504.998 572.644L578.173 589.676L654.199 598.36L731.727 598.337L809.391 589.249L885.798 570.938L959.467 543.36L1026.05 508.152L1083.69 466.931L1132.16 420.75L1171.23 370.665L1200.85 317.685L1220.96 262.775L1231.55 206.811L1232.71 150.622L1224.52 94.9493L1207 40.4889L1180.25 -12.1549L1144.64 -61.9707L1127.18 -80.2812"
            stroke="url(#paint22_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M682.014 487.059L680.308 463.116L676.651 420.189L672.141 374.166L666.755 325.225L660.472 273.524L653.224 219.265L645.011 162.74L635.811 104.285L625.623 44.2137L614.47 -17.0241L602.376 -78.9577L602.084 -80.2812"
            stroke="url(#paint23_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.49 487.2L1389.17 462.471L1332.24 433.12L1276.73 407.584L1222.94 386.536L1171.22 370.671L1121.94 360.618L1075.47 356.938L1025.38 358.98L980.142 365.532L939.549 376.034L903.443 390.036L871.557 407.068L856.23 425.491L836.461 438.438L830.762 442.186L815.009 456.031"
            stroke="url(#paint24_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1229.61 725.286L1226.09 720.843L1183.45 669.029L1141.96 621.099L1101.73 577.79L1063.02 539.889L1026.04 508.16L990.99 483.274L958.161 465.839L922.953 453.25L891.336 446.675L863.13 445.531L838.132 449.189L816.186 457.11"
            stroke="url(#paint25_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M579.918 459.71L557.972 452.26L533.086 449.141L505.059 450.913L473.734 458.184L438.952 471.558L406.55 489.734L372.105 515.427L335.82 548.01L297.897 586.83L258.538 631.104L217.99 680.089L182.4 725.283"
            stroke="url(#paint26_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M673.582 486.454L671.405 465.764L666.042 423.308L659.445 377.891L651.501 329.623L642.189 278.73L631.44 225.413L619.233 169.943L605.545 112.61L590.376 53.7954L573.703 -6.09577L555.572 -66.6159L551.174 -80.2812"
            stroke="url(#paint27_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M775.793 475.485L777.656 470.234L793.431 433.747L812.617 396.228L807.523 383.393L800.252 371.051L791.254 359.876L780.797 350.048L769.039 341.61L756.181 334.586L742.448 329.066L727.997 325.05L713.03 322.582L697.703 321.773L682.22 322.626L666.759 325.229L651.5 329.627L636.869 335.753L623.675 343.293L611.984 352.067L601.909 361.941L593.494 372.756L586.852 384.38L605.768 423.829L621.409 461.909L627.288 479.03"
            stroke="url(#paint28_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M665.084 485.511L662.862 469.444L655.884 427.639L647.244 383.029L636.854 335.749L624.647 286L610.533 233.986L594.489 179.951L576.447 124.233L556.431 67.1918L534.395 9.20765L510.43 -49.292L496.719 -80.2812"
            stroke="url(#paint29_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M340.907 -80.2812L320.307 -62.7114L284.763 -23.464L255.546 19.1712L233.129 64.7906L218.05 112.879L210.847 162.941L212.148 214.373L222.583 266.612L242.756 318.942L272.331 369.005L309.985 414.512L354.999 454.926L406.543 489.73L463.696 518.43L525.495 540.555L590.861 555.657L658.719 563.376L727.878 563.332L797.171 555.298L865.433 539.052L931.338 514.548L990.982 483.267L1042.82 446.556L1086.53 405.357L1121.94 360.612L1148.96 313.174L1167.51 263.897L1177.59 213.543L1179.21 162.897L1172.34 112.587L1157.08 63.2649L1133.41 15.5133L1101.63 -29.7921L1063.78 -70.1834L1051.43 -80.2812"
            stroke="url(#paint30_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1079.89 725.284L1086.47 722.726L1183.45 669.028L1266.45 606.556L1335.05 537.128L1389.18 462.471L1428.89 384.224L1433.49 369.773"
            stroke="url(#paint31_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M615.386 476.328L600.643 477.495L584.015 484.137L565.435 496.905L544.768 516.495L525.493 540.55L504.983 572.639L483.329 612.11L460.665 658.291L437.125 710.418L430.798 725.273"
            stroke="url(#paint32_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M961.023 725.28L953.617 708.069L930.011 656.189L907.347 610.232L885.783 570.941L865.43 539.054L846.423 515.178L826.115 495.79L807.917 483.179L791.76 476.672L777.489 475.617"
            stroke="url(#paint33_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M837.072 -80.2812L833.325 -68.1641L815.911 -7.46483L799.98 52.5836L785.528 111.532L772.581 169L761.092 224.605L751.061 278.057L742.444 329.062L735.196 377.397L729.227 422.905L724.492 465.427L722.653 485.803"
            stroke="url(#paint34_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M656.988 484.591L655.192 473.932L646.755 432.957L636.275 389.357L623.665 343.289L608.809 294.931L591.643 244.51L572.076 192.293L550.085 138.572L525.604 83.7071L498.676 28.0797L469.325 -27.8851L439.525 -80.2812"
            stroke="url(#paint35_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M763.016 444.655L755.79 437.743L747.644 431.775L738.758 426.816L729.221 422.911L719.191 420.061L708.779 418.333L698.142 417.75L687.371 418.356L676.646 420.196L666.031 423.315L655.889 427.646L646.756 432.964L638.677 439.157L631.721 446.113L625.954 453.743L621.399 461.911L618.123 470.506L616.934 476.003"
            stroke="url(#paint36_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M675.576 490.156L671.806 498.997L667.61 514.256L662.988 536.651L658.724 563.376L654.192 598.36L649.457 640.995L644.52 690.565L641.333 725.279"
            stroke="url(#paint37_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M646.623 483.446L637.468 485.892L628.964 483.962L600.645 477.5L599.545 477.118L565.661 465.18L543.11 469.713L517.888 480.08L489.838 496.932L463.696 518.429L435.893 547.713L406.542 584.177L375.867 627.127L343.98 675.798L313.597 725.278"
            stroke="url(#paint38_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M883.72 725.278L953.62 708.067L1052.87 669.74L1141.96 621.091L1218.38 564.364L1281.87 501.196L1332.24 433.115L1369.54 361.622L1393.84 287.997L1405.33 213.52L1404.3 139.29L1390.97 66.272L1365.59 -4.65988L1328.41 -72.7194L1322.68 -80.2812"
            stroke="url(#paint39_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M847.997 725.285L835.948 679.126L822.327 630.769L809.379 589.256L797.172 555.305L785.817 529.522L773.722 508.137L762.907 493.753L753.302 485.697L744.865 483.273"
            stroke="url(#paint40_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M746.801 477.974L739.979 472.948L732.507 468.751L724.496 465.43L716.081 463.007L707.33 461.548L698.376 461.055L689.333 461.571L680.312 463.119L671.404 465.767L662.877 469.447L655.203 473.935L648.426 479.186"
            stroke="url(#paint41_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M582.695 460.18L581.125 459.17L580.81 458.767L565.148 445.348L551.437 429.595L540.285 412.07L536.133 408.996L510.148 389.742L475.771 369.614L436.973 352.111L393.507 337.66L345.24 326.732L291.968 319.821L242.758 318.945L190.788 324.129L136.417 334.833L80.0708 350.451L22.0869 370.287L0.5 378.814"
            stroke="url(#paint42_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M820.478 327.9L809.639 314.638L797.051 302.947L782.936 292.939L767.543 284.614L751.072 278.061L733.771 273.304L715.842 270.387L697.508 269.422L678.973 270.432L660.483 273.528L642.195 278.735L624.669 286.005L608.827 294.936L594.802 305.348L582.663 317.084L572.542 329.942L564.509 343.765L558.675 358.35L582.057 396.61L601.826 434.084L618.14 470.503L620.675 477.303"
            stroke="url(#paint43_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1002.09 -80.2812L988.31 -61.9258L952.519 -8.56436L919.51 45.0885L889.351 98.5623L862.042 151.453L837.583 203.378L815.951 253.979L797.035 302.942L780.788 350.043L767.055 395.035L755.79 437.737L746.792 477.971L750.809 481.876"
            stroke="url(#paint44_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M610.818 -80.2812L602.381 -78.9577L555.571 -66.6159L510.446 -49.292L469.336 -27.8851L432.536 -2.77475L400.267 25.6785L372.846 57.094L350.541 91.1347L333.689 127.397L322.693 165.455L317.914 204.903L319.799 245.272L328.752 286.045L345.245 326.728L368.852 365.459L398.539 400.532L433.725 431.543L473.734 458.18L517.896 480.081L565.445 496.91L615.62 508.399L667.613 514.256L720.615 514.234L773.729 508.13L826.126 495.788L876.84 477.118L922.953 453.243L963.21 425.149L997.43 393.486L1025.39 358.974L1047 322.263L1062.17 283.936L1070.83 244.622L1072.92 204.881L1068.41 165.23L1057.28 126.186L1039.46 88.2174L1015.18 52.0451L985.918 19.6873L952.528 -8.56434L915.593 -32.642L875.673 -52.5237L833.329 -68.1641L789.056 -79.4513L783.648 -80.2812"
            stroke="url(#paint45_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M644.654 482.998L648.423 479.183L638.684 439.151L626.59 396.718L611.981 352.062L594.792 305.343L574.889 256.806L552.179 206.699L526.621 155.312L498.168 103.028L466.797 50.1824L432.532 -2.77476L395.439 -55.3961L375.849 -80.2812"
            stroke="url(#paint46_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M746.8 477.969L745.903 483.018"
            stroke="url(#paint47_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M649.323 483.734L648.426 479.18"
            stroke="url(#paint48_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M601.947 470.544L599.86 466.662L598.782 455.622L599.456 444.716L601.812 434.079L605.761 423.824L611.259 414.086L593.487 372.752L572.528 329.937L548.226 285.866L520.424 240.807L489.053 195.03L454.002 148.917L415.271 102.803L372.838 57.094L326.725 12.2597L284.763 -23.464L241.095 -55.0142L200.076 -80.2812"
            stroke="url(#paint49_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M591.2 465.244L588.777 461.811L583.032 448.796L580.541 445.811L577.041 441.615L559.56 420.634L556.643 417.739L532.184 393.505L528.751 390.722L500.634 367.744L495.069 345.529L493.296 323.358L495.114 301.547L458.762 266.025L417.967 231.244L372.638 197.584L322.688 165.451L268.07 135.27L218.052 112.875L165.678 95.2599L111.441 81.9983L55.7688 72.6631L0.5 66.8516"
            stroke="url(#paint50_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M743.028 725.28L740.178 690.499L735.824 640.952L731.718 598.339L727.881 563.334L724.336 536.608L720.61 514.236L717.289 498.977L714.395 490.135L711.859 487.039"
            stroke="url(#paint51_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M590.863 465.093L588.777 461.816L585.433 458.002L566.404 436.213L562.724 432.802L540.285 412.068L532.184 393.51L527.382 374.729L525.766 355.969L493.296 323.364L456.428 291.59L414.982 261.004L368.846 231.968L317.908 204.905L262.101 180.244L210.849 162.943L157.106 150.669L101.299 142.972L43.8532 139.404L0.5 139.359"
            stroke="url(#paint52_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M600.747 469.938L599.872 466.662L598.256 464.193L579.587 435.605L578.33 422.388L579.183 409.351L582.055 396.605L586.857 384.376L564.507 343.76L538.567 302.224L508.857 260.015L475.287 217.447L437.746 174.879L396.165 132.648L350.546 91.1347L300.864 50.8108L255.559 19.1712L208.323 -8.11567L159.607 -31.3853L109.813 -51.0424L59.3243 -67.5132L12.2012 -80.2812"
            stroke="url(#paint53_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.5 140.726L1404.3 139.289L1345.69 139.334L1288.36 142.925L1232.71 150.621L1179.21 162.896L1128.27 180.196L1072.92 204.88L1022.47 231.942L976.852 260.957L935.945 291.564L899.638 323.339L867.729 355.944L866.046 374.411L861.423 392.52L853.973 410.023L843.719 426.673L830.771 442.179L815.692 456.72L810.328 459.884L809.386 460.31L807.075 460.916L804.583 463.048"
            stroke="url(#paint54_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.49 217.855L1405.33 213.524L1345.85 207.353L1287.77 204.93L1231.54 206.815L1177.59 213.547L1126.39 225.641L1070.83 244.626L1020.31 266.504L974.716 290.829L933.944 317.173L901.114 342.574L897.771 345.177L868.846 371.836L866.041 374.416L840.864 402.039L838.531 404.597L819.95 428.944L815.014 435.385L811.693 448.108L806.397 460.382L804.826 462.94"
            stroke="url(#paint55_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1088.02 725.283L1086.47 722.725L1052.88 669.745L1020.41 621.68L989.215 579.291L959.46 543.365L931.343 514.552L904.999 493.527L876.837 477.123L851.57 467.183L829.086 463.031L809.182 464.041L798.792 467.609L794.282 469.157L791.724 469.651"
            stroke="url(#paint56_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1355.45 -80.2812L1328.41 -72.7194L1278.14 -55.8448L1228.64 -35.8058L1180.24 -12.1549L1133.41 15.5133L1088.55 47.4897L1039.45 88.2174L994.418 130.09L953.466 172.658L916.553 215.562L883.612 258.4L854.552 300.833L829.24 342.593L807.519 383.388L789.208 422.994L793.426 433.743L795.805 444.648L796.411 455.622L795.289 466.482L794.347 468.3"
            stroke="url(#paint57_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.5 -15.1328L1420.06 -13.5172L1365.6 -4.65369L1311.67 6.96987L1258.67 21.8701L1206.99 40.4951L1157.09 63.271L1109.38 90.6023L1057.28 126.192L1009.57 163.307L966.284 201.521L927.329 240.432L892.615 279.679L862.029 318.925L835.438 357.881L812.617 396.23L815.534 409.267L816.32 422.395L815.018 435.387L799.221 460.295L795.294 466.488L794.89 468.036"
            stroke="url(#paint58_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M789.233 -80.2812L789.054 -79.4513L777.34 -17.4503L766.614 43.8324L756.897 103.925L748.191 162.448L740.495 218.996L733.763 273.3L727.995 325.045L723.149 374.009L719.199 420.055L716.08 463.004L714.689 486.723"
            stroke="url(#paint59_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.49 298.416L1393.84 288.003L1334.49 275.437L1276.73 266.82L1220.94 262.781L1167.51 263.903L1116.94 270.68L1062.16 283.942L1012.48 300.615L967.757 320.227L927.792 342.352L896.152 364.029L892.427 366.587L883.654 387.321L857.691 407.18L853.966 410.03L831.616 431.325L828.295 434.512L813.35 452.172L806.394 460.385"
            stroke="url(#paint60_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M782.581 472.992L782.805 472.52L795.797 444.65L815.522 409.263L838.994 373.427L866.392 337.389L897.92 301.418L892.602 279.674L883.604 258.402L870.97 237.959L855.509 219.536L837.58 203.38L817.586 189.534L795.797 178.068L772.573 169.002L748.181 162.45L722.936 158.455L697.131 157.109L671.055 158.5L645.003 162.742L619.22 169.945L594.492 179.953L572.075 192.295L552.17 206.701L534.915 222.947L520.419 240.809L508.84 260.017L500.358 280.348L495.107 301.553L527.195 337.479L555.133 373.517L579.165 409.353L599.451 444.718L613.745 474.36L614.059 474.989"
            stroke="url(#paint61_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M771.632 476.986L775.29 475.64L775.739 475.483H775.784L778.634 474.81L782.359 473.441L788.732 471.13L793.601 469.716L794.274 468.931L794.521 468.504L798.785 467.607L809.174 464.039L815.906 460.583L838.121 449.184L844.539 444.763L863.59 431.636L885.401 411.8L903.443 390.033L917.602 366.763L927.79 342.349L933.938 317.171L935.935 291.568L933.759 265.875L927.319 240.428L916.548 215.565L901.536 191.712L883.202 170.259L862.042 151.455L838.458 135.366L812.832 122.037L785.522 111.535L756.889 103.928L727.269 99.3056L696.998 97.7344L666.391 99.373L635.805 104.287L605.534 112.612L576.453 124.236L550.086 138.575L526.615 155.315L506.217 174.231L489.051 195.033L475.272 217.45L465.108 241.214L458.757 266.031L456.423 291.59L458.308 317.598L464.703 343.718L475.767 369.613L491.205 394.139L510.301 416.198L532.696 435.653L558.546 445.661L580.806 458.766L582.31 459.865L582.691 460.179L585.339 462.176L586.461 462.782L588.031 463.702L590.859 465.094L591.196 465.25L592.205 465.744L595.841 467.539L600.8 470.21L602.101 470.838L603.313 471.22L607.801 473.216L614.555 476.044L616.148 476.156L617.428 476.179L620.704 477.435L622.476 477.951"
            stroke="url(#paint62_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M602.666 471.841L597.303 469.687L585.68 465.872L578.88 462.528L557.967 452.251L532.7 435.646L503.416 429.587L470.497 428.039L433.719 431.539L392.923 440.717L355 454.922L314.721 476.307L272.355 504.289L228.127 538.172L182.35 577.24L135.204 620.728L86.9591 667.851L37.7492 717.846L30.6133 725.274"
            stroke="url(#paint63_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M585.635 461.867L585.209 461.531L584.984 461.441L575.806 450.917L571.049 446.743L551.437 429.599L546.456 426.233L523.32 410.548L510.148 389.746L500.634 367.755L464.708 343.723L424.205 321.822L378.944 302.457L328.746 286.053L273.523 273.105L222.585 266.62L168.909 265.812L112.9 270.166L54.9832 279.141L0.5 290.99"
            stroke="url(#paint64_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M595.845 467.541L594.925 466.217L583.032 448.804L579.577 435.609L577.602 433.096L555.477 404.867L554.04 389.092L555.14 373.519L558.663 358.35L531.511 319.507L500.365 280.35L465.112 241.215L425.641 202.439L381.861 164.359L333.683 127.401L281.152 91.9692L233.131 64.7946L182.979 42.1534L131.121 23.6851L78.0287 8.9651L24.0616 -2.47932L0.5 -6.22656"
            stroke="url(#paint65_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M581.125 459.176L580.452 459.401L558.55 445.668L539.567 429.242L523.32 410.55L491.209 394.147L454.902 380.84L414.174 371.123L368.846 365.469L318.738 364.414L272.333 369.014L223.213 380.054L171.714 396.974L118.218 419.145L63.0167 445.87L6.46874 476.432L0.5 479.911"
            stroke="url(#paint66_linear_421_152)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M675.573 490.156L714.393 490.134H714.483L722.36 489.214L753.304 485.691L759.924 484.12L767.261 482.414L791.765 476.67L794.346 475.728L796.523 474.919L829.083 463.026L863.123 445.524L892.991 424.879L918.504 401.542L939.553 376.028L956.001 348.764L967.759 320.221L974.715 290.825L976.847 260.958L974.042 231.068L966.278 201.515L953.465 172.658L935.738 145.057L914.151 120.284L889.355 98.5624L861.755 80.0273L831.82 64.656L799.978 52.5837L766.61 43.8325L732.121 38.4916L696.868 36.7188L661.257 38.559L625.622 44.2138L590.37 53.7955L556.441 67.1919L525.609 83.7072L498.166 103.028L474.222 124.862L454.004 148.917L437.735 174.88L425.641 202.435L417.967 231.248L414.982 261.003L416.956 291.296L424.205 321.814L436.973 352.108L454.902 380.83L477.207 406.748L503.416 429.592L533.081 449.136L565.664 465.18L585.68 465.876L597.304 469.691L600.804 470.207L601.949 470.544L602.6 470.858L602.981 471.531L607.805 473.214L614.066 474.987L616.153 476.154L620.708 477.433L622.481 477.949L627.283 479.026L634.352 480.642L641.824 482.347L644.652 482.998L646.626 483.447L649.319 483.738L656.993 484.591L665.094 485.511L673.576 486.454L678.939 487.059"
            stroke="url(#paint67_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.49 63.9375L1390.97 66.2713L1334.24 72.2625L1278.62 81.6646L1224.51 94.9486L1172.34 112.586L1122.62 135.004L1068.4 165.23L1018.9 197.386L974.044 231.068L933.765 265.871L897.929 301.415L899.634 323.339L897.771 345.173L892.431 366.58L864.628 389.85L861.419 392.521L837.342 417.024L834.604 419.807L817.438 441.013L811.693 448.103L800.877 464.462L800.384 465.225"
            stroke="url(#paint68_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M788.958 470.661L789.025 470.526L796.408 455.627L816.312 422.394L840.008 389.07L867.721 355.95L866.397 337.392L862.021 318.924L854.549 300.838L844.002 283.447L831.009 267.762L815.953 253.984L799.1 242.158L780.723 232.353L761.088 224.611L740.488 219.001L719.126 215.59L697.315 214.445L675.256 215.635L653.221 219.27L631.432 225.419L610.54 233.991L591.646 244.515L574.884 256.812L560.366 270.657L548.225 285.871L538.554 302.229L531.508 319.508L527.2 337.482L525.763 355.972L554.038 389.093L578.317 422.394L598.782 455.627L607.399 472.456L607.534 472.703"
            stroke="url(#paint69_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M586.219 462.517L585.343 462.181L580.452 459.398L565.148 445.351L558.999 441.469L539.567 429.239L510.305 416.202L477.207 406.755L440.002 401.347L398.534 400.539L352.622 404.87L309.987 414.519L264.794 430.989L217.312 453.698L167.877 481.995L116.782 515.183L64.2732 552.478L10.6425 593.138L0.5 601.194"
            stroke="url(#paint70_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1433.5 386.168L1428.9 384.216L1369.55 361.619L1311.49 342.523L1255.15 327.668L1200.84 317.682L1148.96 313.172L1099.96 314.676L1047 322.26L999.068 333.772L956.006 348.761L917.612 366.758L883.661 387.312L871.566 407.059L848.229 423.485L843.719 426.672L823.994 444.556L819.686 448.46L810.844 459.007L810.328 459.882L809.632 460.466"
            stroke="url(#paint71_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1390.4 725.278L1365.83 700.909L1315.66 652.327L1266.45 606.55L1218.38 564.364L1171.73 526.531L1126.74 493.814L1083.68 466.931L1042.81 446.556L1004.42 433.294L963.198 425.149L926.128 422.523L892.985 424.879L863.589 431.634L837.716 442.27L815.68 456.721L812.763 457.978"
            stroke="url(#paint72_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M588.036 463.701L586.465 462.781L585.568 461.951L585.209 461.524L575.806 450.911L566.404 436.213L559.56 420.64L555.477 404.864L553.098 402.307L527.382 374.728L524.532 372.147L495.069 345.534L491.658 342.931L458.313 317.597L416.956 291.297L370.843 267.063L319.793 245.274L263.739 226.38L212.15 214.375L157.936 207.732L101.501 205.938L43.2698 208.473L0.5 212.983"
            stroke="url(#paint73_linear_421_152)"
            stroke-width="0.789766"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g filter="url(#filter0_f_421_152)">
            <ellipse cx="-8.5" cy="79.5" rx="238" ry="264.5" fill="#080808" />
          </g>
          <g filter="url(#filter1_f_421_152)">
            <ellipse
              cx="-15"
              cy="546.064"
              rx="274.5"
              ry="305.064"
              fill="#080808"
            />
          </g>
          <g filter="url(#filter2_f_421_152)">
            <ellipse
              cx="1438"
              cy="549.4"
              rx="286.5"
              ry="318.4"
              fill="#080808"
            />
          </g>
          <g filter="url(#filter3_f_421_152)">
            <ellipse cx="1569.5" cy="-17" rx="377" ry="401" fill="#080808" />
          </g>
          <g filter="url(#filter4_f_421_152)">
            <ellipse cx="945" cy="-258" rx="386.5" ry="374" fill="#080808" />
          </g>
          <g filter="url(#filter5_f_421_152)">
            <ellipse cx="648" cy="-268" rx="386.5" ry="374" fill="#080808" />
          </g>
          <g filter="url(#filter6_f_421_152)">
            <ellipse cx="351.5" cy="-267" rx="373" ry="374" fill="#080808" />
          </g>
          <g filter="url(#filter7_f_421_152)">
            <ellipse
              cx="-234.644"
              cy="-23.5"
              rx="339.856"
              ry="340.5"
              fill="#080808"
            />
          </g>
          <g filter="url(#filter8_f_421_152)">
            <ellipse
              cx="358.133"
              cy="787.025"
              rx="286.5"
              ry="351.103"
              transform="rotate(-90.5091 358.133 787.025)"
              fill="#080808"
            />
          </g>
          <g filter="url(#filter9_f_421_152)">
            <ellipse
              cx="926.432"
              cy="765.315"
              rx="286.5"
              ry="318.4"
              transform="rotate(-90.5091 926.432 765.315)"
              fill="#080808"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_421_152"
            x="-446.5"
            y="-385"
            width="876"
            height="929"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter1_f_421_152"
            x="-520.172"
            y="10.3277"
            width="1010.34"
            height="1071.47"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="115.336"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter2_f_421_152"
            x="910.744"
            y="-9.7563"
            width="1054.51"
            height="1118.31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="120.378"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter3_f_421_152"
            x="942.5"
            y="-668"
            width="1254"
            height="1302"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter4_f_421_152"
            x="408.5"
            y="-782"
            width="1073"
            height="1048"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter5_f_421_152"
            x="111.5"
            y="-792"
            width="1073"
            height="1048"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter6_f_421_152"
            x="-171.5"
            y="-791"
            width="1046"
            height="1048"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter7_f_421_152"
            x="-831.967"
            y="-621.467"
            width="1194.65"
            height="1195.93"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="128.733"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter8_f_421_152"
            x="-142.965"
            y="350.516"
            width="1002.2"
            height="873.016"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <filter
            id="filter9_f_421_152"
            x="458.034"
            y="328.812"
            width="936.796"
            height="873.008"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_421_152"
            />
          </filter>
          <linearGradient
            id="paint0_linear_421_152"
            x1="8.00002"
            y1="-17.4981"
            x2="410.999"
            y2="-28.0262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.12" stop-color="#ED4767" />
            <stop offset="1" stop-color="#B82753" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_421_152"
            x1="3.47365"
            y1="571.916"
            x2="196.342"
            y2="621.055"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_421_152"
            x1="5.94604"
            y1="451.584"
            x2="358.031"
            y2="543.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_421_152"
            x1="1383.67"
            y1="-85.6481"
            x2="1445.94"
            y2="-78.7614"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_421_152"
            x1="1221.99"
            y1="503.275"
            x2="1476.18"
            y2="561.551"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_421_152"
            x1="1.72731"
            y1="-87.7249"
            x2="85.5332"
            y2="-78.7364"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_421_152"
            x1="9.4702"
            y1="284.845"
            x2="587.63"
            y2="439.568"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_421_152"
            x1="707.303"
            y1="-109.829"
            x2="752.202"
            y2="-109.186"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_421_152"
            x1="821.484"
            y1="382.224"
            x2="1366.98"
            y2="735.429"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_421_152"
            x1="122.655"
            y1="-117.848"
            x2="1419.98"
            y2="361.757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_421_152"
            x1="696.736"
            y1="-109.829"
            x2="698.994"
            y2="-109.827"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_421_152"
            x1="741.957"
            y1="-109.671"
            x2="992.458"
            y2="-89.4319"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_421_152"
            x1="770.11"
            y1="320.265"
            x2="833.415"
            y2="325.241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_421_152"
            x1="753.713"
            y1="442.743"
            x2="765.438"
            y2="443.425"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_421_152"
            x1="306.841"
            y1="-109.585"
            x2="722.891"
            y2="-52.9209"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_421_152"
            x1="383.306"
            y1="-122.238"
            x2="1334.75"
            y2="91.1866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_421_152"
            x1="277.682"
            y1="-112.413"
            x2="1256.34"
            y2="196.235"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_421_152"
            x1="66.6986"
            y1="-120.429"
            x2="1481.05"
            y2="416.428"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_421_152"
            x1="733.369"
            y1="-109.718"
            x2="927.384"
            y2="-97.6283"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_421_152"
            x1="614.465"
            y1="365.577"
            x2="809.473"
            y2="436.847"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_421_152"
            x1="766.952"
            y1="-109.432"
            x2="1150.02"
            y2="-61.2748"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_421_152"
            x1="650.873"
            y1="-109.83"
            x2="700.758"
            y2="-109.037"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_421_152"
            x1="176.462"
            y1="-115.627"
            x2="1362.32"
            y2="306.564"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_421_152"
            x1="603.521"
            y1="-109.83"
            x2="702.716"
            y2="-106.691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_421_152"
            x1="1384"
            y1="433.004"
            x2="1105.55"
            y2="203.443"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="0.395" stop-color="white" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_421_152"
            x1="823.622"
            y1="430.961"
            x2="1286.23"
            y2="584.528"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint26_linear_421_152"
            x1="189.55"
            y1="434.758"
            x2="636.621"
            y2="579.325"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint27_linear_421_152"
            x1="553.375"
            y1="-109.799"
            x2="705.08"
            y2="-102.438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint28_linear_421_152"
            x1="590.913"
            y1="313.583"
            x2="844.951"
            y2="395.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint29_linear_421_152"
            x1="499.747"
            y1="-109.75"
            x2="707.969"
            y2="-95.8314"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint30_linear_421_152"
            x1="228.263"
            y1="-113.805"
            x2="1307.91"
            y2="251.057"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint31_linear_421_152"
            x1="1086.25"
            y1="351.257"
            x2="1504.63"
            y2="444.733"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint32_linear_421_152"
            x1="434.118"
            y1="463.362"
            x2="657.234"
            y2="500.524"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint33_linear_421_152"
            x1="780.79"
            y1="462.614"
            x2="1002.73"
            y2="499.264"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint34_linear_421_152"
            x1="724.711"
            y1="-109.765"
            x2="866.557"
            y2="-103.325"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint35_linear_421_152"
            x1="443.436"
            y1="-109.702"
            x2="711.575"
            y2="-86.5139"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint36_linear_421_152"
            x1="619.561"
            y1="414.716"
            x2="757.32"
            y2="492.316"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint37_linear_421_152"
            x1="641.949"
            y1="477.91"
            x2="684.442"
            y2="479.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint38_linear_421_152"
            x1="319.587"
            y1="451.633"
            x2="512.08"
            y2="351.923"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.260325" stop-color="white" />
            <stop offset="0.779959" stop-color="#EF4C68" />
          </linearGradient>
          <linearGradient
            id="paint39_linear_421_152"
            x1="893.102"
            y1="-122.238"
            x2="1527.65"
            y2="-29.9425"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint40_linear_421_152"
            x1="746.72"
            y1="470.669"
            x2="873.673"
            y2="482.821"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint41_linear_421_152"
            x1="650.195"
            y1="460.11"
            x2="699.365"
            y2="520.037"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint42_linear_421_152"
            x1="10.9711"
            y1="311.589"
            x2="400.351"
            y2="672.14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint43_linear_421_152"
            x1="563.383"
            y1="258.595"
            x2="864.51"
            y2="343.782"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint44_linear_421_152"
            x1="751.384"
            y1="-109.56"
            x2="1065.26"
            y2="-77.5412"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint45_linear_421_152"
            x1="331.493"
            y1="-111.247"
            x2="1198.82"
            y2="136.165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint46_linear_421_152"
            x1="380.752"
            y1="-109.619"
            x2="715.404"
            y2="-73.2422"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint47_linear_421_152"
            x1="745.919"
            y1="477.706"
            x2="747.032"
            y2="477.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint48_linear_421_152"
            x1="648.442"
            y1="478.942"
            x2="649.554"
            y2="478.992"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint49_linear_421_152"
            x1="207.471"
            y1="-108.97"
            x2="704.297"
            y2="-25.6611"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint50_linear_421_152"
            x1="11.1241"
            y1="46.1019"
            x2="671.653"
            y2="266.098"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint51_linear_421_152"
            x1="712.42"
            y1="474.631"
            x2="751.105"
            y2="475.768"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint52_linear_421_152"
            x1="11.118"
            y1="122.394"
            x2="640.227"
            y2="378.517"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint53_linear_421_152"
            x1="22.7865"
            y1="-108.939"
            x2="714.006"
            y2="57.1451"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint54_linear_421_152"
            x1="815.895"
            y1="122.427"
            x2="1472.21"
            y2="408.809"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint55_linear_421_152"
            x1="816.133"
            y1="191.492"
            x2="1417.07"
            y2="520.406"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint56_linear_421_152"
            x1="797.053"
            y1="449.372"
            x2="1142.85"
            y2="537.131"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.145" stop-color="#FE756C" />
            <stop offset="0.48" stop-color="white" />
            <stop offset="0.955" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint57_linear_421_152"
            x1="799.392"
            y1="-108.853"
            x2="1466.92"
            y2="45.9208"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint58_linear_421_152"
            x1="806.376"
            y1="-40.2979"
            x2="1535.43"
            y2="176.153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="0.21" stop-color="#DD1D63" />
            <stop offset="0.585" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint59_linear_421_152"
            x1="716.03"
            y1="-109.813"
            x2="808.552"
            y2="-107.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint60_linear_421_152"
            x1="817.673"
            y1="252.489"
            x2="1334.2"
            y2="620.704"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint61_linear_421_152"
            x1="502.352"
            y1="140.553"
            x2="965.243"
            y2="272.314"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint62_linear_421_152"
            x1="465.048"
            y1="77.9314"
            x2="1016.47"
            y2="234.145"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint63_linear_421_152"
            x1="40.902"
            y1="412.558"
            x2="639.636"
            y2="671.401"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint64_linear_421_152"
            x1="11.024"
            y1="255.601"
            x2="512.513"
            y2="591.808"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint65_linear_421_152"
            x1="11.2077"
            y1="-30.902"
            x2="696.2"
            y2="162.453"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="0.195" stop-color="white" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint66_linear_421_152"
            x1="40"
            y1="453.506"
            x2="452.472"
            y2="566.715"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="0.215" stop-color="white" />
            <stop offset="0.58" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint67_linear_421_152"
            x1="425.087"
            y1="13.1022"
            x2="1072.88"
            y2="193.411"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint68_linear_421_152"
            x1="811.771"
            y1="43.0371"
            x2="1510.5"
            y2="290.664"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint69_linear_421_152"
            x1="531.914"
            y1="200.994"
            x2="922.187"
            y2="317.073"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint70_linear_421_152"
            x1="11.0345"
            y1="390.088"
            x2="519.875"
            y2="723.735"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint71_linear_421_152"
            x1="820.853"
            y1="305.5"
            x2="1227.63"
            y2="692.521"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint72_linear_421_152"
            x1="823.152"
            y1="406.755"
            x2="1429.38"
            y2="666.571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <linearGradient
            id="paint73_linear_421_152"
            x1="11.0672"
            y1="192.512"
            x2="589.34"
            y2="488.594"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FE756C" />
            <stop offset="1" stop-color="#DD1D63" />
          </linearGradient>
          <clipPath id="clip0_421_152">
            <rect
              width="1433"
              height="599"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
