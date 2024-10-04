import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackgroundImageIcon2 } from './BackgroundImageIcon2.js';
import { BackgroundImageIcon } from './BackgroundImageIcon.js';
import classes from './Screen.module.css';
import { SvgIcon2 } from './SvgIcon2.js';
import { SvgIcon3 } from './SvgIcon3.js';
import { SvgIcon4 } from './SvgIcon4.js';
import { SvgIcon5 } from './SvgIcon5.js';
import { SvgIcon6 } from './SvgIcon6.js';
import { SvgIcon } from './SvgIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Screen: FC<Props> = memo(function Screen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.bodyHome}>
        <div className={classes.divElementor}>
          <div className={classes.sectionElementorSection}>
            <div className={classes.divElementorContainer}>
              <div className={classes.divElementorWidgetWrap}>
                <div className={classes.imageAttachmentLarge}></div>
                <div className={classes.divElementorWidgetContainer}>
                  <div className={classes.paragraph}>
                    <div className={classes.noordijkerveldweg10}>Noordijkerveldweg 10</div>
                    <div className={classes._7161LWNeede}>7161LW Neede</div>
                    <div className={classes.netherlands}>Netherlands</div>
                  </div>
                  <div className={classes.paragraph2}>
                    <div className={classes.kvKNumber78449227}>KvK-number: 78449227</div>
                    <div className={classes.btwIdentificationnumber}>Btw-identificationnumber: </div>
                    <div className={classes.nL861402728B01}>NL861402728B01</div>
                  </div>
                </div>
              </div>
              <div className={classes.divElementorWidgetWrap2}>
                <div className={classes.listElementorIconListItems}>
                  <div className={classes.itemElementorIconListItem}>
                    <div className={classes.outsourceGoogleAds}>Outsource Google Ads</div>
                  </div>
                  <div className={classes.itemElementorIconListItem2}>
                    <div className={classes.googleAdsAudit}>Google Ads audit</div>
                  </div>
                  <div className={classes.itemElementorIconListItem3}>
                    <div className={classes.googleAdsCoaching}>Google Ads coaching</div>
                  </div>
                </div>
                <div className={classes.divElementorElement}>
                  <div className={classes.googleAdsServices}>Google Ads services</div>
                </div>
              </div>
              <div className={classes.divElementorWidgetWrap3}>
                <div className={classes.listElementorIconListItems2}>
                  <div className={classes.itemElementorIconListItem4}>
                    <div className={classes.visitMyLinkedIn}>Visit my LinkedIn</div>
                  </div>
                  <div className={classes.itemElementorIconListItem5}>
                    <div className={classes.googleAdsCommunity}>Google Ads community</div>
                  </div>
                  <div className={classes.itemElementorIconListItem6}>
                    <div className={classes.googleAdsNewsletter}>Google Ads newsletter</div>
                  </div>
                  <div className={classes.itemElementorIconListItem7}>
                    <div className={classes.googleAdsPodcast}>Google Ads podcast</div>
                  </div>
                </div>
                <div className={classes.divElementorElement2}>
                  <div className={classes.resources}>Resources</div>
                </div>
              </div>
              <div className={classes.divElementorWidgetWrap4}>
                <div className={classes.listElementorIconListItems3}>
                  <div className={classes.itemElementorIconListItem8}>
                    <div className={classes.aboutMe}>About me</div>
                  </div>
                  <div className={classes.itemElementorIconListItem9}>
                    <div className={classes.contact}>Contact</div>
                  </div>
                  <div className={classes.itemElementorIconListItem10}>
                    <div className={classes.termsAndConditions}>Terms and conditions</div>
                  </div>
                  <div className={classes.itemElementorIconListItem11}>
                    <div className={classes.privacyStatement}>Privacy statement</div>
                  </div>
                  <div className={classes.itemElementorIconListItem12}>
                    <div className={classes.cookiePolicy}>Cookie policy</div>
                  </div>
                </div>
                <div className={classes.divElementorElement3}>
                  <div className={classes.general}>General</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.sectionElementorSection2}>
            <div className={classes.divElementorWidgetWrap5}>
              <div className={classes.divElementorContainer2}>
                <div className={classes.imageAttachmentFull}></div>
                <div className={classes.imageAttachmentLarge2}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divElementor2}>
          <div className={classes.sectionElementorSection3}>
            <div className={classes.divElementorWidgetWrap6}>
              <button className={classes.linkElementorButton}>
                <div className={classes.getInTouch}>Get in touch</div>
              </button>
              <div className={classes.paragraph3}>
                <div className={classes.bingo}>bingo.</div>
                <div className={classes.letSTalkAboutTheResultsICanGet}>
                  Let’s talk about the results I can get for your business. Free of jargon and without bullshit{' '}
                </div>
              </div>
              <div className={classes.divElementorElement4}>
                <div className={classes.readyToGrow}>Ready to grow?</div>
              </div>
            </div>
          </div>
          <div className={classes.divElementorContainer3}>
            <div className={classes.divElementorWidgetWrap7}>
              <div className={classes.divElementorElement5}>
                <div className={classes.onlineMarketeerAtBrunen}>Online Marketeer at Brünen</div>
              </div>
              <button className={classes.linkElementorButton2}>
                <div className={classes.spanElementorButtonContentWrap}>
                  <div className={classes.lauraWever}>Laura Wever</div>
                  <div className={classes.svg}>
                    <SvgIcon className={classes.icon} />
                  </div>
                </div>
              </button>
              <div className={classes.imageAttachmentFull2}></div>
              <div className={classes.paragraph4}>
                <div className={classes.toFindUsMuchBetter}>to find us much better.</div>
                <div className={classes.wellOurTargetGroupNowKnowsHow}>well. Our target group now knows how </div>
                <div className={classes.fastAreFlexibleAndAlwaysAdvise}>fast, are flexible and always advise us </div>
                <div className={classes.veryNiceAndEnlighteningYouWork}>very nice and enlightening. You work </div>
                <div className={classes.weHaveExperiencedYourServiceAs}>We have experienced your service as </div>
              </div>
              <div className={classes.imageAttachmentFull3}></div>
            </div>
            <div className={classes.divElementorWidgetWrap8}>
              <div className={classes.divElementorElement6}>
                <div className={classes.ownerAtLovePeaceJoy}>Owner at Love, Peace &amp; Joy</div>
              </div>
              <button className={classes.linkElementorButton3}>
                <div className={classes.ellenDas}>Ellen Das</div>
                <div className={classes.svg2}>
                  <SvgIcon2 className={classes.icon2} />
                </div>
              </button>
              <div className={classes.imageAttachmentFull4}></div>
              <div className={classes.paragraph5}>
                <div className={classes.that}>that.</div>
                <div className={classes.explanationThatIAmVerySatisfie}>explanation that I am very satisfied with </div>
                <div className={classes.yearIThinkItNeedsNoFurther}>year. I think it needs no further </div>
                <div className={classes.thanTripledComparedToThePrevio}>than tripled compared to the previous </div>
                <div className={classes.theNumberOfConversionsHasMore}>The number of conversions has more </div>
              </div>
              <div className={classes.imageAttachmentFull5}></div>
            </div>
            <div className={classes.divElementorWidgetWrap9}>
              <div className={classes.divElementorElement7}>
                <div className={classes.marketingManagerAtGamecity}>Marketing Manager at Gamecity</div>
              </div>
              <button className={classes.linkElementorButton4}>
                <div className={classes.reneSpeelman}>René Speelman</div>
                <div className={classes.svg3}>
                  <SvgIcon3 className={classes.icon3} />
                </div>
              </button>
              <div className={classes.imageAttachmentFull6}></div>
              <div className={classes.paragraph6}>
                <div className={classes.budgetGreat}>budget, great!</div>
                <div className={classes.weAreGettingMoreBookingsForLes}>We are getting more bookings for less </div>
                <div className={classes.thingsHaveBeenGoingMuchBetter}>things have been going much better. </div>
                <div className={classes.googleAdsSinceSwitchingToBob}>Google Ads. Since switching to Bob, </div>
                <div className={classes.weFeltWeCouldGetMoreOutOf}>We felt we could get more out of </div>
              </div>
              <div className={classes.imageAttachmentFull7}></div>
            </div>
          </div>
          <div className={classes.divElementorContainer4}>
            <div className={classes.divElementorWidgetWrap10}>
              <div className={classes.divElementorElement8}>
                <div className={classes.headOfDigitalAtWeightWatchers}>Head of Digital at WeightWatchers</div>
              </div>
              <div className={classes.jensRiga}>Jens Riga</div>
              <div className={classes.svg4}>
                <SvgIcon4 className={classes.icon4} />
              </div>
              <div className={classes.imageAttachmentFull8}></div>
              <div className={classes.paragraph7}>
                <div className={classes.exceededExpectations}>exceeded expectations!</div>
                <div className={classes.momentOfContactTheResults}>moment of contact. The results </div>
                <div className={classes.knowledgeAndExpertiseFromThe1s}>knowledge and expertise from the 1st </div>
                <div className={classes.bobConvincedWeightWatchersOfHi}>Bob convinced WeightWatchers of his </div>
              </div>
              <div className={classes.imageAttachmentFull9}></div>
            </div>
            <div className={classes.divElementorWidgetWrap11}>
              <div className={classes.divElementorElement9}>
                <div className={classes.directorAtWisMon}>Director at WisMon</div>
              </div>
              <div className={classes.timNota}>Tim Nota</div>
              <div className={classes.svg5}>
                <SvgIcon5 className={classes.icon5} />
              </div>
              <div className={classes.imageAttachmentFull10}></div>
              <div className={classes.paragraph8}>
                <div className={classes.optimizingOurCampaigns}>optimizing our campaigns.</div>
                <div className={classes.moreProfessionalBasisForFurthe}>more professional basis for further </div>
                <div className={classes.structuredApproachHeAlsoOffere}>structured approach. He also offered a </div>
                <div className={classes.bobHasProvidedResultsQuicklyWi}>Bob has provided results quickly with a </div>
              </div>
              <div className={classes.imageAttachmentFull11}></div>
            </div>
            <div className={classes.divElementorWidgetWrap12}>
              <div className={classes.divElementorElement10}>
                <div className={classes.founderAtNOXSleepDrink}>Founder at NOX Sleep Drink</div>
              </div>
              <div className={classes.spanElementorButtonContentWrap2}>
                <div className={classes.fanarAlObaidy}>Fanar Al-Obaidy</div>
                <div className={classes.svg6}>
                  <SvgIcon6 className={classes.icon6} />
                </div>
              </div>
              <div className={classes.imageAttachmentFull12}></div>
              <div className={classes.paragraph9}>
                <div className={classes.weAreExtremelySatisfied}>We are extremely satisfied!</div>
                <div className={classes.googleAdsHasBecomeIndispensabl}>Google Ads has become indispensable. </div>
                <div className={classes.quiteSomeTimeAndHisExpertiseIn}>quite some time, and his expertise in </div>
                <div className={classes.weHaveBeenWorkingWithBobFor}>We have been working with Bob for </div>
              </div>
              <div className={classes.imageAttachmentFull13}></div>
            </div>
          </div>
          <div className={classes.divElementorElement11}>
            <div className={classes.whatPeopleSayAboutMe}>What people say about me</div>
          </div>
          <div className={classes.sectionElementorSection4}>
            <div className={classes.divElementorContainer5}>
              <div className={classes.divElementorWidgetWrap13}>
                <button className={classes.linkElementorButton5}>
                  <div className={classes.getInTouch2}>Get in touch</div>
                </button>
                <div className={classes.paragraph10}>
                  <div className={classes.letSTalkAboutTheResultsICanGet2}>
                    Let’s talk about the results I can get for your business. Free of{' '}
                  </div>
                  <div className={classes.jargonAndWithoutBullshitBingo}>jargon and without bullshit bingo.</div>
                </div>
                <div className={classes.divElementorElement12}>
                  <div className={classes.iGetTheMostOutOfIt}>I get the most out of it.</div>
                </div>
                <div className={classes.divElementorElement13}>
                  <div className={classes.workWithMe}>Work with me.</div>
                </div>
              </div>
              <div className={classes.divElementorWidgetWrap14}>
                <div className={classes.backgroundImages}>
                  <div className={classes.backgroundImage}>
                    <BackgroundImageIcon className={classes.icon7} />
                  </div>
                </div>
                <div className={classes.imageAttachmentFull14}></div>
              </div>
            </div>
          </div>
          <div className={classes.divElementorContainer6}>
            <div className={classes.divElementorWidgetWrap15}>
              <button className={classes.linkElementorButton6}>
                <div className={classes.iWantToKnowMore}>I want to know more</div>
              </button>
              <div className={classes.paragraph11}>
                <div className={classes.optimizeYourAccount}>optimize your account.</div>
                <div className={classes.meSetupManageAnd}>me setup, manage and </div>
                <div className={classes.googleAdsCampaignsLet}>Google Ads campaigns. Let </div>
                <div className={classes.iGetTheMostOutOfYour}>I get the most out of your </div>
              </div>
              <div className={classes.divElementorElement14}>
                <div className={classes.outsourceGoogleAds2}>Outsource Google Ads</div>
              </div>
              <div className={classes.imageAttachmentFull15}></div>
            </div>
            <div className={classes.divElementorWidgetWrap16}>
              <button className={classes.linkElementorButton7}>
                <div className={classes.iWantToLearnGoogleAds}>I want to learn Google Ads</div>
              </button>
              <div className={classes.paragraph12}>
                <div className={classes.growMyClientSAccounts}>grow my client’s accounts!</div>
                <div className={classes.cleverHacksIUseDailyTo}>clever hacks I use daily to </div>
                <div className={classes.strategiesTechniquesAnd}>strategies, techniques, and </div>
                <div className={classes.learnProvenGoogleAds}>Learn proven Google Ads </div>
              </div>
              <div className={classes.divElementorElement15}>
                <div className={classes.googleAdsCourses}>Google Ads courses</div>
              </div>
              <div className={classes.imageAttachmentFull16}></div>
            </div>
            <div className={classes.divElementorWidgetWrap17}>
              <button className={classes.linkElementorButton8}>
                <div className={classes.iWantToSpar}>I want to spar</div>
              </button>
              <div className={classes.paragraph13}>
                <div className={classes.hereForYou}>here for you!</div>
                <div className={classes.areReadyToGoDeeperIAm}>are ready to go deeper? I am </div>
                <div className={classes.googleAdsUnderControlAnd}>Google Ads under control and </div>
                <div className={classes.doYouHaveTheBasicsOf}>Do you have the basics of </div>
              </div>
              <div className={classes.divElementorElement16}>
                <div className={classes.googleAdsCoaching2}>Google Ads coaching</div>
              </div>
              <div className={classes.imageAttachmentFull17}></div>
            </div>
          </div>
          <div className={classes.divElementorElement17}>
            <div className={classes.googleAdsServices2}>Google Ads services</div>
          </div>
          <div className={classes.sectionElementorSection5}>
            <div className={classes.divElementorContainer7}>
              <div className={classes.divElementorWidgetWrap18}>
                <div className={classes.imageAttachmentFull18}></div>
                <div className={classes.imageAttachmentLarge3}></div>
              </div>
              <div className={classes.divElementorWidgetWrap19}>
                <div className={classes.divElementorElement18}>
                  <div className={classes.hiIMCsabaGaraguly}>Hi, I&#39;m Csaba Garaguly.</div>
                </div>
                <div className={classes.divElementorWidgetContainer2}>
                  <div className={classes.paragraph14}>
                    <div className={classes.asAGoogleAdsSpecialistIHelpAmb}>
                      <p className={classes.labelWrapper}>
                        <span className={classes.label}>As a Google Ads specialist, I help </span>
                        <span className={classes.label2}>ambitious companies</span>
                        <span className={classes.label3}> get the most</span>
                      </p>
                    </div>
                    <div className={classes.outOfGoogleAdsIWorkForASelectN}>
                      out of Google Ads. I work for a select number of clients and am{' '}
                    </div>
                    <div className={classes.responsibleForOver150000PerMon}>
                      responsible for over €1,500,000 per month in ad spend.
                    </div>
                  </div>
                  <div className={classes.paragraph15}>
                    <div className={classes.overTheYearsIHaveHadTheOpportu}>
                      Over the years, I have had the opportunity to work on more than 100{' '}
                    </div>
                    <div className={classes.googleAdsAccountsOftenChalleng}>
                      Google Ads accounts. Often challenging accounts from great names,{' '}
                    </div>
                    <div className={classes.includingWeightWatchersLouwman}>
                      <p className={classes.labelWrapper2}>
                        <span className={classes.label4}>including </span>
                        <span className={classes.label5}>Weight Watchers</span>
                        <span className={classes.label6}>, </span>
                        <span className={classes.label7}>Louwman</span>
                        <span className={classes.label8}>, </span>
                        <span className={classes.label9}>Harley Davidson</span>
                        <span className={classes.label10}>, </span>
                        <span className={classes.label11}>KPMG</span>
                        <span className={classes.label12}>,</span>
                      </p>
                    </div>
                    <div className={classes.schoonenbergAndMore}>
                      <p className={classes.labelWrapper3}>
                        <span className={classes.label13}>Schoonenberg</span>
                        <span className={classes.label14}>, and more.</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes.paragraph16}>
                    <div className={classes.iAlsoProvideGoogleAdsCoursesan}>
                      <p className={classes.labelWrapper4}>
                        <span className={classes.label15}>I also provide </span>
                        <span className={classes.label16}>Google Ads courses</span>
                        <span className={classes.label17}>and 1-on-1 </span>
                        <span className={classes.label18}>coaching sessions</span>
                        <span className={classes.label19}>. In</span>
                      </p>
                    </div>
                    <div className={classes.theseIShareMyKnowledgeWithNovi}>
                      <p className={classes.labelWrapper5}>
                        <span className={classes.label20}>these, I share my knowledge with </span>
                        <span className={classes.label21}>novice to very advanced</span>
                        <span className={classes.label22}> Google</span>
                      </p>
                    </div>
                    <div className={classes.adsAdvertisersThisWayTheyLearn}>
                      Ads advertisers. This way, they learn the intricacies of the business.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divElementorWidgetWrap20}>
            <div className={classes.divElementorContainer8}>
              <div className={classes.imageAttachmentFull19}></div>
              <div className={classes.imageAttachmentFull20}></div>
              <div className={classes.imageAttachmentFull21}></div>
              <div className={classes.imageAttachmentFull22}></div>
              <div className={classes.imageAttachmentFull23}></div>
              <div className={classes.imageAttachmentFull24}></div>
            </div>
            <div className={classes.divElementorContainer9}>
              <div className={classes.imageAttachmentFull25}></div>
              <div className={classes.imageAttachmentFull26}></div>
              <div className={classes.imageAttachmentFull27}></div>
              <div className={classes.imageAttachmentFull28}></div>
              <div className={classes.imageAttachmentFull29}></div>
              <div className={classes.imageAttachmentFull30}></div>
            </div>
            <div className={classes.divElementorElement19}>
              <div className={classes.mayIAddYoursToTheList}>May I add yours to the list?</div>
            </div>
            <div className={classes.imageAttachmentFull31}></div>
            <div className={classes.divElementorElement20}>
              <div className={classes.iWorkWithTheBestToolsAvailable}>I work with the best tools available</div>
            </div>
          </div>
          <div className={classes.sectionElementorSection6}>
            <div className={classes.divElementorContainer10}>
              <div className={classes.divElementorWidgetWrap21}>
                <button className={classes.linkElementorButton9}>
                  <div className={classes.iWantToOutsourceGoogleAds}>I want to outsource Google Ads</div>
                </button>
                <div className={classes.paragraph17}>
                  <div className={classes.iLlGetTheMostOutOfYourGoogleAd}>
                    I’ll get the most out of your Google Ads campaigns or teach you{' '}
                  </div>
                  <div className={classes.theIntricaciesSoYouCanDoItYour}>
                    the intricacies so you can do it yourself!
                  </div>
                </div>
                <div className={classes.h1ElementorHeadingTitle}>
                  <div className={classes.withMeBehindTheWheel}> with me behind the wheel.</div>
                  <div className={classes.spanLine}>
                    <div className={classes.performBetter}>perform better</div>
                  </div>
                  <div className={classes.campaigns}>campaigns </div>
                  <div className={classes.yourGoogleAds}>Your Google Ads </div>
                </div>
                <div className={classes.imageAttachmentFull32}></div>
              </div>
              <div className={classes.divElementorWidgetWrap22}>
                <div className={classes.backgroundImages2}>
                  <div className={classes.backgroundImage2}>
                    <BackgroundImageIcon2 className={classes.icon8} />
                  </div>
                </div>
                <div className={classes.imageAttachmentFull33}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sectionElementorSection7}>
          <div className={classes.divElementorContainer11}>
            <div className={classes.imageAttachmentFull34}></div>
            <div className={classes.csabaGaraguly}>Csaba Garaguly</div>
          </div>
        </div>
      </div>
    </div>
  );
});
