import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ReviewButton from '../components/review-button'
import Faceboook from '../components/faceboook'
import Instagram from '../components/instagram'
import Google from '../components/google'
import Twitter from '../components/twitter'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WD50_MP2</title>
        <meta property="og:title" content="WD50_MP2" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5df4fe0d-c56b-4e40-a2f8-62ae2ce60a05/4a54f7e3-642b-4238-85fb-fa6d9b3e4d19?org_if_sml=1"
        />
      </Helmet>
      <div className="home-hero">
        <video
          src="/playground_assets/kid-4470.mp4"
          loop
          muted
          poster="/playground_assets/pexels-pixabay-45170-2000w.jpg"
          autoPlay
          className="home-video"
        ></video>
        <div className="home-container01">
          <h1 className="home-text">
            <span className="home-text01">Healthy.</span>
            <br></br>
          </h1>
          <h1 className="home-text03">
            <span className="home-text04"> Healed.</span>
            <br></br>
          </h1>
          <h1 className="home-text06">
            <span>Happy.</span>
            <br></br>
          </h1>
          <span className="home-text09">Veterinarian in the Philippines</span>
          <button className="home-button button">MAKE AN APPOINTMENT</button>
          <span className="home-text10">HAVING AN EMERGENCY?</span>
          <span className="home-text11">Call us at (999) 999-9999</span>
        </div>
        <div className="home-container02">
          <header
            id="back to top"
            data-role="Accordion"
            className="home-header"
          >
            <img
              alt="logo"
              src="/playground_assets/vetopia%20logo%20%5B350%20%C3%97%20100px%5D1-1500h.png"
              className="home-image"
            />
            <div className="home-separator"></div>
            <nav className="home-nav">
              <nav className="home-nav1">
                <div
                  data-thq="thq-dropdown"
                  className="home-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle"
                  >
                    <span className="home-text12">
                      <span>the vetopia way</span>
                      <br></br>
                    </span>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="home-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle01"
                      >
                        <span className="home-text15 footer_black_below">
                          our culture
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown01 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle02"
                      >
                        <span className="home-text16 footer_black_below">
                          our team
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown02 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle03"
                      >
                        <span className="home-text17 footer_black_below">
                          <span className="footer_black_below">careers</span>
                          <br></br>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="home-thq-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle04"
                  >
                    <span className="home-text20">
                      <span>general practice</span>
                      <br></br>
                    </span>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="home-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown03 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle05"
                      >
                        <span className="home-text23 footer_black_below">
                          pet exams
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown04 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle06"
                      >
                        <span className="home-text24 footer_black_below">
                          vaccinations
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown05 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle07"
                      >
                        <span className="home-text25 footer_black_below">
                          surgery
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown06 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle08"
                      >
                        <span className="home-text26 footer_black_below">
                          spay &amp; neuter
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown07 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle09"
                      >
                        <span className="home-text27 footer_black_below">
                          teeth cleaning
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle10"
                      >
                        <span className="home-text28 footer_black_below">
                          grooming
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="home-text29 footer_black">24/7 emergency</span>
                <div
                  data-thq="thq-dropdown"
                  className="home-thq-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle11"
                  >
                    <span className="home-text30">
                      <span>resources</span>
                      <br></br>
                    </span>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="home-dropdown-list2"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown09 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle12"
                      >
                        <span className="home-text33 footer_black_below">
                          make an appointment
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown10 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle13"
                      >
                        <span className="home-text34 footer_black_below">
                          new client form
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown11 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle14"
                      >
                        <span className="home-text35 footer_black_below">
                          review us
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown12 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle15"
                      >
                        <span className="home-text36 footer_black_below">
                          blog
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown13 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle16"
                      >
                        <span className="home-text37 footer_black_below">
                          contact
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </nav>
          </header>
        </div>
      </div>
      <div className="home-container03">
        <div className="home-container04">
          <h1 className="home-text38">Accesible, individualized care</h1>
          <div className="home-container05">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M731.429 640v-109.714c0-10.286-8-18.286-18.286-18.286h-128v-128c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v128h-128c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h128v128c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v-128h128c10.286 0 18.286-8 18.286-18.286zM365.714 219.429h292.571v-73.143h-292.571v73.143zM146.286 219.429v731.429h-18.286c-70.286 0-128-57.714-128-128v-475.429c0-70.286 57.714-128 128-128h18.286zM822.857 219.429v731.429h-621.714v-731.429h91.429v-91.429c0-30.286 24.571-54.857 54.857-54.857h329.143c30.286 0 54.857 24.571 54.857 54.857v91.429h91.429zM1024 347.429v475.429c0 70.286-57.714 128-128 128h-18.286v-731.429h18.286c70.286 0 128 57.714 128 128z"></path>
            </svg>
          </div>
          <h1 className="home-text39">
            High-end medicine with care and expertise
          </h1>
        </div>
        <div className="home-container06">
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_itqodaed.json"
            loop
            speed="1"
            autoplay
            background="transparent"
            className="home-lottie-node"
          ></Player>
        </div>
        <div className="home-container07">
          <h1 className="home-text40">
            Compassionate service that suits your needs
          </h1>
          <div className="home-container08">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M731.429 585.143h174.286c-6.857 7.429-11.429 11.429-12.571 12.571l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-1.143-0.571-5.714-4.571-12-11.429h210.857c16.571 0 31.429-11.429 35.429-27.429l40-160.571 108.571 381.143c4.571 15.429 18.857 26.286 35.429 26.286v0c16 0 30.286-10.857 34.857-26.286l83.429-277.143 32 64c6.286 12 18.857 20 32.571 20zM1024 340.571c0 65.714-28.571 125.714-58.857 171.429h-210.857l-63.429-126.286c-6.286-13.143-21.143-21.143-35.429-20-15.429 1.714-28 11.429-32 26.286l-73.714 245.714-112-392c-4.571-15.429-18.857-26.286-36-26.286-16.571 0-30.857 11.429-34.857 27.429l-66.286 265.143h-241.714c-30.286-45.714-58.857-105.714-58.857-171.429 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
            </svg>
          </div>
          <h1 className="home-text41">A unique approach to veterinary care</h1>
        </div>
      </div>
      <div className="home-container09">
        <div className="home-container10"></div>
        <div className="home-container11"></div>
        <div className="home-container12"></div>
      </div>
      <div className="home-container13">
        <div className="home-div">
          <DangerousHTML
            html={`<iframe src='https://widgets.sociablekit.com/google-reviews/iframe/131798' frameborder='0' width='100%' height='1000'></iframe>`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="home-container14">
        <h1 className="home-text42">Two Animal Hospitals in One.</h1>
        <span className="home-text43">
          Our ability to meet the diverse needs of pets and their families is
          just one of many things that set us apart. VETOPIA offers three
          distinct areas of care in one spacious, ultra-modern facility in the
          Philippines.
        </span>
        <div className="home-container15">
          <button className="home-button1 button">GENERAL PRACTICE</button>
          <button className="home-button2 button">EMERGENCY CARE</button>
        </div>
      </div>
      <div className="home-container16">
        <div className="home-container17">
          <div className="home-container18">
            <div className="home-container19"></div>
            <div className="home-container20">
              <h1 className="home-text44">GENERAL</h1>
            </div>
            <div className="home-container21">
              <h1 className="home-text45">PRACTICE</h1>
            </div>
          </div>
        </div>
        <div className="home-container22">
          <svg viewBox="0 0 1024 1024" className="home-icon04">
            <path d="M731.429 585.143h174.286c-6.857 7.429-11.429 11.429-12.571 12.571l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-1.143-0.571-5.714-4.571-12-11.429h210.857c16.571 0 31.429-11.429 35.429-27.429l40-160.571 108.571 381.143c4.571 15.429 18.857 26.286 35.429 26.286v0c16 0 30.286-10.857 34.857-26.286l83.429-277.143 32 64c6.286 12 18.857 20 32.571 20zM1024 340.571c0 65.714-28.571 125.714-58.857 171.429h-210.857l-63.429-126.286c-6.286-13.143-21.143-21.143-35.429-20-15.429 1.714-28 11.429-32 26.286l-73.714 245.714-112-392c-4.571-15.429-18.857-26.286-36-26.286-16.571 0-30.857 11.429-34.857 27.429l-66.286 265.143h-241.714c-30.286-45.714-58.857-105.714-58.857-171.429 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
          </svg>
          <span className="home-text46">
            Our general practice center offers wellness exams, vaccinations, and
            other preventive services to support your pet’s routine healthcare
            needs. From puppies and kittens to senior pets, we invest everything
            we have into giving them the best quality of life possible.
          </span>
          <button className="home-button3 button">SEE ALL SERVICES</button>
          <button className="home-button4 button">MAKE AN APPOINTMENT</button>
        </div>
      </div>
      <div className="home-container23">
        <div className="home-container24">
          <svg viewBox="0 0 1024 1024" className="home-icon06">
            <path d="M731.429 640v-109.714c0-10.286-8-18.286-18.286-18.286h-128v-128c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v128h-128c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h128v128c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v-128h128c10.286 0 18.286-8 18.286-18.286zM365.714 219.429h292.571v-73.143h-292.571v73.143zM146.286 219.429v731.429h-18.286c-70.286 0-128-57.714-128-128v-475.429c0-70.286 57.714-128 128-128h18.286zM822.857 219.429v731.429h-621.714v-731.429h91.429v-91.429c0-30.286 24.571-54.857 54.857-54.857h329.143c30.286 0 54.857 24.571 54.857 54.857v91.429h91.429zM1024 347.429v475.429c0 70.286-57.714 128-128 128h-18.286v-731.429h18.286c70.286 0 128 57.714 128 128z"></path>
          </svg>
          <span className="home-text47">
            We’re the only animal hospital in the Philippines that offers
            24-hour emergency vet services seven days a week. Our emergency vet
            staff maintains consistent communication with your primary
            veterinarian for the highest level of care.
          </span>
          <button className="home-button5 button">LEARN MORE</button>
          <h1 className="home-text48">HAVING AN EMERGENCY?</h1>
          <h1 className="home-text49">Call us at (999) 999-9999</h1>
        </div>
        <div className="home-container25">
          <div className="home-container26">
            <div className="home-container27"></div>
            <div className="home-container28">
              <h1 className="home-text50">24 HOUR</h1>
            </div>
            <div className="home-container29">
              <h1 className="home-text51">EMERGENCY</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container30">
        <div className="home-container31">
          <div className="home-container32">
            <div className="home-container33">
              <div className="home-container34">
                <div className="home-div1">
                  <DangerousHTML
                    html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850011!2d121.04882269999999!3d14.5532811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1680991754221!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
                  ></DangerousHTML>
                </div>
                <div className="home-container35">
                  <a href="#back to top" className="home-link">
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-238.336l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835v238.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="home-container36">
                <span className="home-text52">
                  © 2023 VETOPIA. Proudly created by Group 1
                </span>
                <div className="home-container37">
                  <div className="home-container38">
                    <ReviewButton rootClassName="review-button-root-class-name2"></ReviewButton>
                  </div>
                  <div className="home-container39">
                    <div className="home-container40">
                      <Faceboook
                        rootClassName="faceboook-root-class-name2"
                        className="home-component1"
                      ></Faceboook>
                    </div>
                    <div className="home-container41">
                      <Instagram
                        rootClassName="instagram-root-class-name2"
                        className="home-component2"
                      ></Instagram>
                    </div>
                  </div>
                  <div className="home-container42">
                    <div className="home-container43">
                      <Google
                        rootClassName="google-root-class-name2"
                        className="home-component3"
                      ></Google>
                    </div>
                    <div className="home-container44">
                      <Twitter
                        rootClassName="twitter-root-class-name2"
                        className="home-component4"
                      ></Twitter>
                    </div>
                  </div>
                </div>
                <div className="home-container45">
                  <div className="home-container46"></div>
                  <div className="home-container47">
                    <span className="home-text53 Footer">appointments</span>
                    <div className="home-container48">
                      <span className="footer_black1">mon - fri:</span>
                      <span className="home-text55 footer11">
                        8:00 am - 6:00 pm
                      </span>
                    </div>
                    <div className="home-container49">
                      <span className="footer_black1">sat:</span>
                      <span className="home-text57 footer11">
                        8:00 am - 2:00 pm
                      </span>
                    </div>
                  </div>
                  <div className="home-container50">
                    <span className="home-text58 Footer">emergencies</span>
                    <span className="home-text59 footer11">
                      24 hours &amp; 7 days a week
                    </span>
                    <span className="footer_black1">(999) 999-9999</span>
                  </div>
                </div>
              </div>
              <div className="home-container51">
                <div className="home-container52"></div>
                <div className="home-container53">
                  <div className="home-div2">
                    <DangerousHTML
                      html={`<!DOCTYPE html>
<html>
<head>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Inter", sans-serif;
  }
  .formbold-mb-5 {
    margin-bottom: 20px;
  }
  .formbold-pt-3 {
    padding-top: 12px;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    display: none;
  }

  .formbold-form-wrapper.active {
    display: block;
  }

  .formbold-form-label {
    display: block;
    font-weight: 500;
    font-size: 16px;
    color: #07074d;
    margin-bottom: 12px;
  }
  .formbold-form-label-2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
  }
  .formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold-btn {
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    padding: 14px 32px;
    border: none;
    font-weight: 600;
    background-color: #6a64f1;
    color: white;
    cursor: pointer;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold--mx-3 {
    margin-left: -12px;
    margin-right: -12px;
  }
  .formbold-px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-full {
    width: 100%;
  }
  .formbold-form-header {
    background: #6a64f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 36px;
    border-radius: 8px 8px 0px 0px;
  }
  .formbold-form-header h3 {
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
  .formbold-form-header button {
    color: white;
    background: transparent;
    border: none;
  }
  .formbold-chatbox-form {
    padding: 32px 36px;
  }
  .formbold-action-buttons {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 48px;
  }
  .formbold-action-btn {
    width: 70px;
    height: 70px;
    background: #6a64f1;
    color: white;
    border-radius: 50%;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formbold-action-btn .formbold-cross-icon {
    display: none;
  }

  .formbold-action-btn.active .formbold-cross-icon {
    display: block;
  }

  .formbold-action-btn.active .formbold-chat-icon {
    display: none;
  }
  @media (min-width: 540px) {
    .sm\:w-half {
      width: 50%;
    }
  }
</style>

</head>
<body>

<div class="formbold-main-wrapper">
  <div class="w-full">
    <div class="formbold-form-wrapper">
      <div class="formbold-form-header">
        <h3>Let's chat? - Online</h3>
        <button onclick="chatboxToogleHandler()">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
            />
          </svg>
        </button>
      </div>
      <form
        action="https://formbold.com/s/3Gq41"
        method="POST"
        class="formbold-chatbox-form"
      >
        <div class="formbold-mb-5">
          <label for="name" class="formbold-form-label"> Your Name </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            class="formbold-form-input"
          />
        </div>

        <div class="formbold-mb-5">
          <label for="email" class="formbold-form-label"> Email Address </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="formbold-form-input"
          />
        </div>

        <div class="formbold-mb-5">
          <label for="message" class="formbold-form-label"> Message </label>
          <textarea
            rows="6"
            name="message"
            id="message"
            placeholder="Don't be shy"
            class="formbold-form-input"
          ></textarea>
        </div>

        <div>
          <button class="formbold-btn w-full">Submit</button>
        </div>
      </form>
    </div>
    <div class="formbold-action-buttons">
      <button class="formbold-action-btn" onclick="chatboxToogleHandler()">
        <span class="formbold-cross-icon">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
              fill="white"
            />
          </svg>
        </span>
        <span class="formbold-chat-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</div>

<script>
  const formWrapper = document.querySelector(".formbold-form-wrapper");
  const formActionButton = document.querySelector(".formbold-action-btn");
  function chatboxToogleHandler() {
    formWrapper.classList.toggle("active");
    formActionButton.classList.toggle("active");
  }
</script>

</body>
</html>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
