import styles from "./world-hexagon-map.module.css";
import img1 from "./asset/icon.svg";
import map from "./asset/hex-map.svg"
import arow from "./asset/arow.svg"
import arrow from "./asset/arrow.svg"
import indicator from "./asset/indicator.svg"
import option from "./asset/option.svg"
import profile from "./asset/profile.svg"
import wstflogo from "./asset/wstflogo-1.svg"

const WorldHexagonMap = () => {
  return (
    <div className={styles.worldHexagonMap}>
      <div className={styles.widgetLSizeTimelineCha}>
        <div className={styles.info}>
          <div className={styles.value}>
            <div className={styles.value1}>
              <div className={styles.title}>Sales Figures</div>
              <div className={styles.value2}>$10,430</div>
            </div>
          </div>
        </div>
        <div className={styles.graph}>
          <div className={styles.chart}>
            <div className={styles.column} />
            <div className={styles.column1} />
            <div className={styles.column2} />
            <div className={styles.column3} />
            <div className={styles.column4} />
            <div className={styles.column5} />
            <div className={styles.column4} />
            <div className={styles.column7} />
            <div className={styles.column8} />
            <div className={styles.column8} />
            <div className={styles.column3} />
            <div className={styles.column3} />
            <div className={styles.column7} />
            <div className={styles.column3} />
            <div className={styles.column14} />
            <div className={styles.column15} />
            <div className={styles.column16} />
            <div className={styles.column17} />
            <div className={styles.column15} />
            <div className={styles.column19} />
            <div className={styles.column20} />
            <div className={styles.column21} />
            <div className={styles.column22} />
            <div className={styles.column23} />
            <div className={styles.column24} />
            <div className={styles.column25} />
            <div className={styles.column19} />
            <div className={styles.column27} />
            <div className={styles.column27} />
            <div className={styles.column29} />
            <div className={styles.column27} />
            <div className={styles.column17} />
            <div className={styles.column32} />
            <div className={styles.column15} />
            <div className={styles.column15} />
            <div className={styles.column17} />
            <div className={styles.column15} />
            <div className={styles.column14} />
            <div className={styles.column15} />
            <div className={styles.column16} />
            <div className={styles.column17} />
            <div className={styles.column15} />
            <div className={styles.column15} />
            <div className={styles.column43} />
            <div className={styles.column32} />
            <div className={styles.column16} />
            <div className={styles.column16} />
            <div className={styles.column} />
            <div className={styles.column1} />
            <div className={styles.column2} />
            <div className={styles.column3} />
            <div className={styles.column51} />
            <div className={styles.column51} />
            <div className={styles.column53} />
            <div className={styles.column51} />
            <div className={styles.column55} />
            <div className={styles.column56} />
            <div className={styles.column16} />
            <div className={styles.column16} />
            <div className={styles.column55} />
            <div className={styles.column16} />
            <div className={styles.column61} />
            <div className={styles.column16} />
            <div className={styles.column14} />
            <div className={styles.column55} />
            <div className={styles.column55} />
            <div className={styles.column55} />
            <div className={styles.column55} />
            <div className={styles.column16} />
            <div className={styles.column69} />
            <div className={styles.column69} />
            <div className={styles.column71} />
            <div className={styles.column72} />
          </div>
          <div className={styles.line}>
            <div className={styles.bg} />
            <div className={styles.cian} />
            <div className={styles.yellow} />
          </div>
        </div>
      </div>
      <div className={styles.navigationBar}>
        <div className={styles.background} />
        <div className={styles.search}>
          <div className={styles.input} />
          {/* <img className={styles.icon} alt="" src="/{img1}" /> */}
          <img className={styles.icon} alt="" src={img1} />

        </div>
        <div className={styles.tab} />
        <div className={styles.menu}>
          <div className={styles.label}>Statistics</div>
          <div className={styles.label1}>Overview</div>
          <div className={styles.label}>Dashboard</div>
          <div className={styles.label}>Analytics</div>
        </div>
        <img className={styles.profileIcon} alt="" src={profile} />
        <img className={styles.optionIcon} alt="" src={option} />
        <div className={styles.logo}>
          <div className={styles.name}>WASSERSTOFF</div>
        </div>
      </div>
      <img className={styles.wstfLogo1Icon} alt="" src={wstflogo} />
      <div className={styles.footer}>
        <div className={styles.background} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>2019</b>
      </div>
      <div className={styles.sideIndicators}>
        <div className={styles.informerInfoWithIcon}>
          <img className={styles.icon1} alt="" src={img1} />
          <div className={styles.info1}>
            <div className={styles.title1}>Total earning</div>
            <div className={styles.amount}>
              <div className={styles.value3}>540,549</div>
              <div className={styles.indicator}>
                <img className={styles.upIcon} alt="" src="/up.svg" />
                <div className={styles.div}>145</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.informerInfoWithIcon}>
          <img className={styles.icon1} alt="" src={img1} />
          <div className={styles.info1}>
            <div className={styles.title1}>Sales</div>
            <div className={styles.amount}>
              <div className={styles.value3}>1,205,677</div>
              <div className={styles.indicator}>
                <img className={styles.upIcon} alt="" src="/up.svg" />
                <div className={styles.div}>145</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.informerInfoWithIcon}>
          <img className={styles.icon1} alt="" src={img1} />
          <div className={styles.info1}>
            <div className={styles.title1}>Purchase</div>
            <div className={styles.amount}>
              <div className={styles.value3}>48,430,039</div>
              <div className={styles.indicator}>
                <img className={styles.upIcon} alt="" src="/up.svg" />
                <div className={styles.div}>145</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.widgetMSizeBigCircleC}>
        <div className={styles.chart1}>
          <div className={styles.percent}>
            <span className={styles.span}>27</span>%
          </div>
          <div className={styles.background1} />
          <div className={styles.progress} />
        </div>
        <div className={styles.info4}>
          <div className={styles.amount3}>92,980</div>
          <div className={styles.detail}>Active users</div>
        </div>
      </div>
      <div className={styles.widgetMSizeBigCircleC1}>
        <div className={styles.chart1}>
          <div className={styles.percent}>
            <span className={styles.span}>67</span>%
          </div>
          <div className={styles.background1} />
          <div className={styles.progress1} />
        </div>
        <div className={styles.info4}>
          <div className={styles.amount3}>22,652</div>
          <div className={styles.detail}>New users</div>
        </div>
      </div>
      <img className={styles.hexMapIcon} alt="" src={map} />
      <div className={styles.mapPinPinWithName}>
        <div className={styles.tooltip}>
          <img className={styles.indicatorIcon} alt="" src={indicator} />
          <div className={styles.info1}>
            <div className={styles.title4}>Chicago</div>
            <div className={styles.amount5}>98,320,300</div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src={arrow} />
      </div>
      <div className={styles.mapPinPinWithName1}>
        <div className={styles.tooltip}>
          <img className={styles.indicatorIcon} alt="" src={indicator} />
          <div className={styles.info1}>
            <div className={styles.title4}>Manaus</div>
            <div className={styles.amount5}>12,320,300</div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src={arrow} />
      </div>
      <div className={styles.mapPinPinWithName2}>
        <div className={styles.tooltip}>
          <img className={styles.indicatorIcon} alt="" src={indicator} />
          <div className={styles.info1}>
            <div className={styles.title4}>Berlin</div>
            <div className={styles.amount5}>76,541,106</div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src={arrow} />
      </div>
      <div className={styles.mapPinPinWithName3}>
        <div className={styles.tooltip}>
          <img className={styles.indicatorIcon} alt="" src={indicator} />
          <div className={styles.info1}>
            <div className={styles.title4}>Giza</div>
            <div className={styles.amount5}>10,547,980</div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src={arrow} />
      </div>
      <div className={styles.mapPinPinWithName4}>
        <div className={styles.tooltip}>
          <img className={styles.indicatorIcon} alt="" src={indicator} />
          <div className={styles.info1}>
            <div className={styles.title4}>Shanghai</div>
            <div className={styles.amount5}>239,570,110</div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src={arrow} />
      </div>
      <div className={styles.mapPinPinWithName5}>
        <div className={styles.tooltip}>
          <img className={styles.indicatorIcon} alt="" src={indicator} />
          <div className={styles.info1}>
            <div className={styles.title4}>Queensland</div>
            <div className={styles.amount5}>6,097,321</div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src={arrow} />
      </div>
      <div className={styles.footer}>
        <div className={styles.background} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>2024</b>
      </div>
      <div className={styles.amount11}>2,431,340</div>
      <div className={styles.title10}>
        <div className={styles.value3}>All users</div>
        <div className={styles.detail2}>
          <b className={styles.detail3}>Detail</b>
          <img className={styles.arowIcon} alt="" src={arow} />
        </div>
      </div>
      <div className={styles.wstfFrontEndHackathon}>
        WSTF FRONT-END HACKATHON
      </div>
    </div>
  );
};

export default WorldHexagonMap;
