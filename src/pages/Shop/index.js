import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Stack,
  Button,
  Line,
  PagerIndicator,
  Grid,
  RatingBar,
  List,
} from "components";
import { getTasksfilteropenincludetargetable2Cowner2Cusers2Ccreater2Cupdater2CtasktypeopenModalpage1perpage251655976962483 } from "service/api";

const ShopPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};
    getTasksfilteropenincludetargetable2Cowner2Cusers2Ccreater2Cupdater2CtasktypeopenModalpage1perpage251655976962483(
      req
    )
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column className="bg-white_A700 items-start justify-start mx-[auto] w-[100%]">
        <Column className="font-roboto w-[100%]">
          <Column className="bg-gradient  items-start justify-start pb-[103px] 3xl:pb-[123px] lg:pb-[80px] xl:pb-[91px] rounded-radius5 w-[100%]">
            <Column className="w-[100%]">
              <header className="w-[100%]">
                <Column className="shadow-bs w-[100%]">
                  <Column className="bg-white_A700 w-[100%]">
                    <Row className="bg-white_A700 items-center justify-end xl:px-[106px] px-[120px] 3xl:px-[144px] lg:px-[93px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                      <Image
                        src={"images/img_logo.svg"}
                        className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] lg:mb-[6px] xl:mb-[7px] mb-[8.07px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain w-[2%]"
                        alt="Logo"
                      />
                      <Text className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_900 w-[auto]">{`mangcoding Store`}</Text>
                      <Column className="font-mada items-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[23%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text className="cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-indigo_A200 text-left w-[auto]">{`Home`}</Text>
                            <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 hover:text-indigo_A200 text-left w-[auto]">{`Shop`}</Text>
                            <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 hover:text-indigo_A200 text-left w-[auto]">{`About Us`}</Text>
                            <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 hover:text-indigo_A200 text-left w-[auto]">{`Contact`}</Text>
                          </Row>
                        </Column>
                        <div className="bg-indigo_A200 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"></div>
                      </Column>
                      <Row className="font-poppins items-start justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[27%]">
                        <Stack className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[7%]">
                          <Image
                            src={"images/img_frame5.svg"}
                            className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="Frame5"
                          />
                          <div className="absolute bg-red_A100 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] right-[0] rounded-radius50 top-[4%] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"></div>
                          <Text className="absolute font-normal not-italic right-[18%] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-left text-white_A700 top-[0] w-[auto]">{`3`}</Text>
                        </Stack>
                        <Image
                          src={"images/img_39.svg"}
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="39"
                        />
                        <Image
                          src={"images/img_frame5_1.svg"}
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="Frame5"
                        />
                        <Row className="bg-white_A700 border-bw15 border-gray_500 border-solid font-mada items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:pb-[10px] xl:pb-[11px] pb-[13px] 3xl:pb-[15px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius10 w-[63%]">
                          <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_300 text-left w-[auto]">{`Search`}</Text>
                          <Image
                            src={"images/img_frame6.svg"}
                            className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[115px] xl:ml-[131px] ml-[148px] 3xl:ml-[177px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                            alt="Frame6"
                          />
                        </Row>
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </header>
            </Column>
            <Row className="font-mada items-start justify-start lg:ml-[342px] xl:ml-[391px] ml-[440px] 3xl:ml-[528px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[33%]">
              <Stack className="bg-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[48px] xl:mb-[55px] mb-[62px] 3xl:mb-[74px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] xl:p-[2px] lg:p-[2px] p-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                <Image
                  src={"images/img_46.svg"}
                  className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                  alt="46"
                />
              </Stack>
              <Row className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-4 items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[83%]">
                <Column className="items-center w-[100%]">
                  <Image
                    src={"images/img_unsplashxpjyl0.png"}
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] mx-[auto] object-cover rounded-radius50 w-[auto]"
                    alt="unsplashxPJYL0"
                  />
                  <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`T-Shirt`}</Text>
                </Column>
                <Column className="items-center w-[100%]">
                  <Image
                    src={"images/img_unsplashjddw6i.png"}
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] mx-[auto] object-cover rounded-radius50 w-[auto]"
                    alt="unsplashjddw6i"
                  />
                  <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Jacket`}</Text>
                </Column>
                <Column className="items-center w-[100%]">
                  <Image
                    src={"images/img_unsplashpfanx.png"}
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] mx-[auto] object-cover rounded-radius50 w-[auto]"
                    alt="unsplashPFanx"
                  />
                  <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Shirt`}</Text>
                </Column>
                <Column className="items-center w-[100%]">
                  <Image
                    src={"images/img_unsplashdmd8hv.png"}
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] mx-[auto] object-cover rounded-radius50 w-[auto]"
                    alt="unsplashDmD8HV"
                  />
                  <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Jeans`}</Text>
                </Column>
              </Row>
              <Stack className="bg-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[48px] xl:mb-[55px] mb-[62px] 3xl:mb-[74px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] xl:p-[2px] lg:p-[2px] p-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                <Image
                  src={"images/img_47.svg"}
                  className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                  alt="47"
                />
              </Stack>
            </Row>
          </Column>
        </Column>
        <Text className="font-bold font-mada xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-gray_900 text-left w-[auto]">{`T - Shirt`}</Text>
        <Column className="font-poppins lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
          <Row className="items-start justify-start xl:px-[106px] px-[120px] 3xl:px-[144px] lg:px-[93px] w-[100%]">
            <Column className="items-start justify-start mb-[1018px] 3xl:mb-[1222px] lg:mb-[791px] xl:mb-[905px] w-[20%]">
              <Row className="items-center justify-start w-[34%]">
                <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[auto]">{`Filter`}</Text>
                <Image
                  src={"images/img_5.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="5"
                />
              </Row>
              <Column className="items-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Categories`}</Text>
                  <Image
                    src={"images/img_46_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] xl:mb-[3px] mb-[4px] lg:ml-[127px] xl:ml-[145px] ml-[164px] 3xl:ml-[196px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                    alt="46"
                  />
                </Row>
                <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] xl:pr-[2px] lg:pr-[2px] pr-[3px] w-[100%]">
                  <Button className="bg-indigo_A200 font-bold xl:py-[4px] lg:py-[4px] py-[5.54px] 2xl:py-[5px] 3xl:py-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[21%]">{`Men`}</Button>
                  <Button className="border border-gray_300 border-solid font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] not-italic xl:py-[4px] lg:py-[4px] py-[5.54px] 2xl:py-[5px] 3xl:py-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-gray_900 w-[33%]">{`Woman`}</Button>
                  <Button className="border border-gray_300 border-solid font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic xl:py-[4px] lg:py-[4px] py-[5.54px] 2xl:py-[5px] 3xl:py-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-gray_900 w-[34%]">{`Children`}</Button>
                </Row>
                <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]" />
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Price`}</Text>
                  <Image
                    src={"images/img_47_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] xl:mb-[3px] mb-[4px] lg:ml-[171px] xl:ml-[195px] ml-[220px] 3xl:ml-[264px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                    alt="47"
                  />
                </Row>
                <Image
                  src={"images/img_group131.svg"}
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] object-contain w-[95%]"
                  alt="Group131"
                />
                <Row className="items-center justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">
                    <span className="text-gray_900 font-poppins font-bold">
                      <>{`$ `}</>
                    </span>
                    <span className="text-gray_900 font-poppins font-extrabold">
                      <>{`40`}</>
                    </span>
                  </Text>
                  <Text className="font-normal lg:ml-[148px] xl:ml-[169px] ml-[191px] 3xl:ml-[229px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`$ 500`}</Text>
                </Row>
                <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]" />
                <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="items-start justify-start w-[34%]">
                      <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Color`}</Text>
                      <Column className="lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Row className="lg:gap-[6px] xl:gap-[7px] gap-[8px] 3xl:gap-[9px] grid grid-cols-4 items-center justify-between w-[100%]">
                          <Image
                            src={"images/img_group135.svg"}
                            className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                            alt="Group135"
                          />
                          <div className="bg-yellow_900 lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"></div>
                          <div className="bg-red_700 lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"></div>
                          <div className="bg-blue_A200 lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Image
                      src={"images/img_48.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mb-[29px] xl:mb-[33px] mb-[38px] 3xl:mb-[45px] lg:ml-[130px] xl:ml-[149px] ml-[168px] 3xl:ml-[201px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="48"
                    />
                  </Row>
                  <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]" />
                </Column>
                <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`Size`}</Text>
                    <Image
                      src={"images/img_49.svg"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] xl:mb-[3px] mb-[4px] lg:ml-[178px] xl:ml-[203px] ml-[229px] 3xl:ml-[274px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      alt="49"
                    />
                  </Row>
                  <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] 3xl:pr-[110px] lg:pr-[71px] xl:pr-[81px] pr-[92px] w-[100%]">
                    <Text className="font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">{`S`}</Text>
                    <div className="xl:mb-[3px] lg:mb-[3px] mb-[4px] xl:mt-[2px] lg:mt-[2px] mt-[3px] overflow-x-auto w-[74%]">
                      <Column className="w-[100%]">
                        <Column className="items-end lg:pl-[143px] xl:pl-[163px] pl-[184px] 3xl:pl-[220px] w-[100%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_900 w-[auto]">{`XXL`}</Text>
                        </Column>
                        <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] w-[100%]">
                          <PagerIndicator
                            className="h-[8px] mx-[auto] w-[auto]"
                            count={5}
                            activeCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-indigo_A200"
                            activeIndex={undefined}
                            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-gray_400"
                            sliderRef={undefined}
                            selectedWrapperCss="2xl:mx-[20px] 3xl:mx-[24px] inline-block lg:mx-[15px] mx-[20.00px] xl:mx-[17px]"
                            unselectedWrapperCss="2xl:mx-[20px] 3xl:mx-[24px] inline-block lg:mx-[15px] mx-[20.00px] xl:mx-[17px]"
                          />
                        </Column>
                      </Column>
                    </div>
                    <Row className="lg:gap-[6px] xl:gap-[7px] gap-[8px] 3xl:gap-[9px] grid grid-cols-3 items-center justify-center w-[48%]">
                      <Text className="font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:px-[10px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">{`M`}</Text>
                      <Text className="font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">{`L`}</Text>
                      <Text className="font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pr-[10px] pr-[12px] 3xl:pr-[14px] lg:pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">{`XL`}</Text>
                    </Row>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]" />
                </Column>
              </Column>
            </Column>
            <Grid className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-3 lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] w-[61%]">
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashtvg4wv.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashtvG4Wv"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplash7cernd.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplash7cERnd"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_1.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashgeupir.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashgEupiR"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_2.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashtvg4wv_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashtvG4Wv"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_3.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplash7cernd_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplash7cERnd"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_4.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashgeupir_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashgEupiR"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_5.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashtvg4wv_2.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashtvG4Wv"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_6.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplash7cernd_2.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplash7cERnd"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_7.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashgeupir_2.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashgEupiR"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_8.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashtvg4wv_3.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashtvG4Wv"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_9.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplash7cernd_3.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplash7cERnd"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_10.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column className="shadow-bs1 w-[100%]">
                <Image
                  src={"images/img_unsplashgeupir_3.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashgEupiR"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_11.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Column className="font-poppins items-end lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:pl-[616px] xl:pl-[705px] pl-[793px] 3xl:pl-[952px] lg:pr-[363px] xl:pr-[415px] pr-[467px] 3xl:pr-[560px] w-[100%]">
          <Button className="bg-gradient  font-bold xl:py-[10px] py-[12.04px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs1 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[13%]">{`Load More`}</Button>
        </Column>
        <Column className="font-mada items-center 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[91px] w-[100%]">
          <Text className="font-normal mx-[auto] not-italic lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-black_900 text-center w-[auto]">{`Recommend Product`}</Text>
          <Row className="font-poppins items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] px-[110px] 3xl:px-[132px] lg:px-[85px] xl:px-[97px] w-[100%]">
            <Stack className="lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] w-[20%]">
              <Column className="absolute right-[0] shadow-bs1 w-[93%]">
                <Image
                  src={"images/img_unsplashjskqei.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashJskqEI"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_12.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Image
                src={"images/img_group1928.svg"}
                className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] left-[0] my-[auto] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Group1928"
              />
            </Stack>
            <List
              className="font-signika lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[40%]"
              orientation="horizontal"
            >
              {apiData?.tasks?.map((apiDataEle) => {
                return (
                  <Column className="shadow-bs1 w-[100%]">
                    <Image
                      src={"images/img_unsplashtvg4wv_4.png"}
                      className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                      alt="unsplashtvG4Wv"
                    />
                    <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                      <Image
                        src={"images/img_rectangle65_13.svg"}
                        className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                        alt="Rectangle65"
                      />
                      <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                        <Column className="w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">
                              {apiDataEle?.title}
                            </Text>
                            <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">
                              {apiDataEle?.description}
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-start ml-[1px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[63%]">
                          <Row className="xl:gap-[3px] lg:gap-[3px] gap-[4px] grid grid-cols-3 items-center justify-evenly w-[42%]">
                            <Image
                              src={"images/img_star1.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain rounded-radius05 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              alt="Star1"
                            />
                            <Image
                              src={"images/img_star2.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain rounded-radius05 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              alt="Star2"
                            />
                            <Image
                              src={"images/img_star3.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain rounded-radius05 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              alt="Star3"
                            />
                          </Row>
                          <Text className="font-normal mb-[1px] lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                );
              })}
            </List>
            <Stack className="font-poppins lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[20%]">
              <Column className="absolute left-[0] shadow-bs1 w-[93%]">
                <Image
                  src={"images/img_unsplashgeupir_4.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  alt="unsplashgEupiR"
                />
                <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                  <Image
                    src={"images/img_rectangle65_15.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle65"
                  />
                  <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_900 text-left w-[auto]">{`Smart T-Shirt`}</Text>
                        <Text className="font-bold font-signika ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left w-[auto]">{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`Best quality`}</Text>
                    <Row className="font-signika items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_500 text-left w-[auto]">{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Image
                src={"images/img_union.svg"}
                className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] my-[auto] object-contain right-[0] rounded-radius50 w-[auto]"
                alt="Union"
              />
            </Stack>
          </Row>
          <footer className="font-poppins lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]">
            <Row className="bg-gray_800 items-center justify-between 3xl:pb-[109px] lg:pb-[70px] xl:pb-[80px] pb-[91px] lg:pt-[62px] xl:pt-[71px] pt-[80px] 3xl:pt-[96px] xl:px-[106px] px-[120px] 3xl:px-[144px] lg:px-[93px] w-[100%]">
              <Column className="items-start w-[29%]">
                <Row className="font-roboto items-center justify-start ml-[1px] w-[38%]">
                  <Image
                    src={"images/img_logo_1.svg"}
                    className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] object-contain w-[22%]"
                    alt="Logo"
                  />
                  <Text className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8.93px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:mt-[7px] xl:mt-[8px] mt-[9px] 3xl:my-[10px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`mangcoding Store`}</Text>
                </Row>
                <Text className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[18px] xl:mt-[21px] mt-[24.07px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus.`}</Text>
                <Button className="bg-white_A700 font-bold font-poppins ml-[1px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:py-[10px] py-[12.04px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs2 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-indigo_A100 w-[42%]">{`Login Now`}</Button>
              </Column>
              <Row className="items-start justify-center lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] xl:ml-[112px] ml-[127px] 3xl:ml-[152px] lg:ml-[98px] w-[45%]">
                <Column className="items-start justify-start w-[12%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Home`}</Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Product`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Categories`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Shop`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Log in`}</Text>
                </Column>
                <Column className="items-start justify-start lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[7%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Shop`}</Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`T-Shirt`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Jacket`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Shirt`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Jens`}</Text>
                </Column>
                <Column className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[16%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Categories`}</Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Men`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Children`}</Text>
                  <Text className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`Woman`}</Text>
                </Column>
                <Column className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[28%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Contact`}</Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_100 text-left w-[auto]">{`mangcoding@gmail.com`}</Text>
                  <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                    <Row className="items-center justify-between mx-[auto] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[97%]">
                      <Image
                        src={"images/img_facebook.svg"}
                        className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                        alt="facebook"
                      />
                      <Stack className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                        <div className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"></div>
                        <Image
                          src={"images/img_vector.svg"}
                          className="absolute lg:h-[11px] h-[13.94px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[74%]"
                          alt="Vector"
                        />
                      </Stack>
                      <Stack className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                        <div className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"></div>
                        <Image
                          src={"images/img_vector_1.svg"}
                          className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-x-[0] mx-[auto] object-contain top-[17%] w-[66%]"
                          alt="Vector"
                        />
                      </Stack>
                      <Stack className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                        <div className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"></div>
                        <Image
                          src={"images/img_vector_2.svg"}
                          className="absolute lg:h-[13px] h-[15.76px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] object-contain w-[66%]"
                          alt="Vector"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default ShopPage;
