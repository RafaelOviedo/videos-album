<template>
    <div id="aboutPage">
        <div id="textContainer">
            <div id="headerBox">
                <h3>About</h3>
            </div>
            <div id="textBox">
                <p>This app was created for the Videos Album challenge from AFEX.
                    <br><br>
                    <b>Tech-Stack used in this app:</b>
                    <br><br>
                    -Vue, Vuex, AWS, DynamoDB, Youtube API
                    <br><br>
                    <b>Here you can:</b>
                    <br><br>
                    -List all database videos
                    <br>
                    -Add new videos
                    <br>
                    -See videos detail and reproduce internally
                    <br>
                    -Delete videos
                </p>
            </div>
            <div id="socialMediaBox">
                <a href="https://github.com/RafaelOviedo" target="_blank" rel="noreferrer">
                    <img id="githubIcon" src="https://pngimg.com/uploads/github/github_PNG58.png" alt="github icon"/>
                </a>
                <a href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US" target="_blank" rel="noreferrer">
                    <img id="linkedinIcon" src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png" alt="linkedin icon"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
#aboutPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100vw;
  height: 92vh;
  background: #f2f2f2;
}
#textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80vh;
}
#headerBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
}
h3 {
    font-size: 25px;
}
#textBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
}
p {
    font-size: 18px;
}
#socialMediaBox {
    width: 100%;
    height: 10%;
}
#githubIcon {
    width: 8%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    margin-right: 3%;
}
#linkedinIcon {
    width: 8%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
}
</style>