
const initState = {
    jobs: [
        { "id": "5d8fbd88fc13ae7aa2000005", "support": false, "link": "https://www.google.com/", "name": "Dynazzy", "image": "http://dummyimage.com/243x141.bmp/5fa2dd/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000006", "support": false, "link": "https://columbia.edu/nulla/sed/accumsan.png?luctus=eget&et=vulputate&ultrices=ut&posuere=ultrices&cubilia=vel&curae=augue&mauris=vestibulum&viverra=ante&diam=ipsum&vitae=primis&quam=in&suspendisse=faucibus&potenti=orci&nullam=luctus&porttitor=et&lacus=ultrices&at=posuere&turpis=cubilia&donec=curae&posuere=donec&metus=pharetra&vitae=magna&ipsum=vestibulum&aliquam=aliquet&non=ultrices&mauris=erat&morbi=tortor&non=sollicitudin&lectus=mi", "name": "Twinder", "image": "http://dummyimage.com/227x248.png/5fa2dd/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000007", "support": false, "link": "http://surveymonkey.com/ornare/consequat/lectus.json?rhoncus=pellentesque&dui=quisque&vel=porta&sem=volutpat&sed=erat&sagittis=quisque&nam=erat&congue=eros&risus=viverra&semper=eget&porta=congue&volutpat=eget&quam=semper&pede=rutrum&lobortis=nulla&ligula=nunc&sit=purus&amet=phasellus&eleifend=in&pede=felis&libero=donec&quis=semper&orci=sapien&nullam=a&molestie=libero&nibh=nam", "name": "Ooba", "image": "http://dummyimage.com/181x102.png/cc0000/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000008", "support": false, "link": "https://aboutads.info/interdum/in/ante.js?platea=nibh&dictumst=in&etiam=quis&faucibus=justo&cursus=maecenas&urna=rhoncus&ut=aliquam&tellus=lacus&nulla=morbi&ut=quis&erat=tortor&id=id&mauris=nulla&vulputate=ultrices&elementum=aliquet&nullam=maecenas&varius=leo&nulla=odio&facilisi=condimentum&cras=id&non=luctus&velit=nec&nec=molestie&nisi=sed&vulputate=justo&nonummy=pellentesque&maecenas=viverra&tincidunt=pede&lacus=ac&at=diam&velit=cras&vivamus=pellentesque&vel=volutpat&nulla=dui&eget=maecenas&eros=tristique&elementum=est&pellentesque=et&quisque=tempus&porta=semper&volutpat=est&erat=quam&quisque=pharetra&erat=magna&eros=ac&viverra=consequat&eget=metus&congue=sapien&eget=ut&semper=nunc&rutrum=vestibulum&nulla=ante&nunc=ipsum&purus=primis&phasellus=in&in=faucibus&felis=orci&donec=luctus&semper=et&sapien=ultrices&a=posuere&libero=cubilia&nam=curae&dui=mauris", "name": "Thoughtbeat", "image": "http://dummyimage.com/166x233.jpg/dddddd/000000" },
        { "id": "5d8fbd88fc13ae7aa2000000", "support": true, "link": "http://is.gd/maecenas.jpg?porttitor=interdum&pede=venenatis&justo=turpis&eu=enim&massa=blandit&donec=mi&dapibus=in&duis=porttitor&at=pede&velit=justo&eu=eu&est=massa&congue=donec&elementum=dapibus&in=duis&hac=at&habitasse=velit&platea=eu&dictumst=est&morbi=congue&vestibulum=elementum&velit=in&id=hac&pretium=habitasse&iaculis=platea&diam=dictumst&erat=morbi&fermentum=vestibulum&justo=velit&nec=id&condimentum=pretium&neque=iaculis&sapien=diam&placerat=erat&ante=fermentum", "name": "Skajo", "image": "http://dummyimage.com/250x145.jpg/ff4444/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000001", "support": true, "link": "https://skyrock.com/lacinia/aenean/sit/amet/justo/morbi/ut.js?ultrices=hac&posuere=habitasse&cubilia=platea&curae=dictumst&mauris=morbi&viverra=vestibulum&diam=velit&vitae=id&quam=pretium&suspendisse=iaculis&potenti=diam&nullam=erat&porttitor=fermentum&lacus=justo&at=nec&turpis=condimentum&donec=neque&posuere=sapien&metus=placerat&vitae=ante&ipsum=nulla&aliquam=justo&non=aliquam&mauris=quis&morbi=turpis&non=eget&lectus=elit&aliquam=sodales&sit=scelerisque&amet=mauris&diam=sit&in=amet&magna=eros&bibendum=suspendisse&imperdiet=accumsan&nullam=tortor&orci=quis&pede=turpis&venenatis=sed&non=ante&sodales=vivamus", "name": "Cogibox", "image": "http://dummyimage.com/151x181.png/cc0000/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000002", "support": true, "link": "https://360.cn/amet/lobortis/sapien/sapien/non.jsp?ultrices=sit&vel=amet&augue=eros&vestibulum=suspendisse&ante=accumsan&ipsum=tortor&primis=quis&in=turpis&faucibus=sed&orci=ante&luctus=vivamus&et=tortor&ultrices=duis&posuere=mattis&cubilia=egestas", "name": "Fiveclub", "image": "http://dummyimage.com/222x177.png/ff4444/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000003", "support": true, "link": "http://tripadvisor.com/aenean/sit/amet/justo/morbi/ut/odio.png?integer=augue&tincidunt=vel&ante=accumsan&vel=tellus&ipsum=nisi&praesent=eu&blandit=orci&lacinia=mauris&erat=lacinia&vestibulum=sapien&sed=quis&magna=libero&at=nullam&nunc=sit&commodo=amet&placerat=turpis&praesent=elementum&blandit=ligula&nam=vehicula&nulla=consequat&integer=morbi&pede=a&justo=ipsum&lacinia=integer&eget=a&tincidunt=nibh&eget=in&tempus=quis&vel=justo&pede=maecenas&morbi=rhoncus&porttitor=aliquam&lorem=lacus&id=morbi&ligula=quis&suspendisse=tortor&ornare=id&consequat=nulla&lectus=ultrices&in=aliquet&est=maecenas&risus=leo&auctor=odio&sed=condimentum&tristique=id&in=luctus&tempus=nec&sit=molestie&amet=sed&sem=justo&fusce=pellentesque&consequat=viverra&nulla=pede&nisl=ac&nunc=diam&nisl=cras&duis=pellentesque&bibendum=volutpat&felis=dui&sed=maecenas&interdum=tristique&venenatis=est&turpis=et&enim=tempus&blandit=semper&mi=est&in=quam&porttitor=pharetra&pede=magna&justo=ac&eu=consequat&massa=metus&donec=sapien&dapibus=ut&duis=nunc&at=vestibulum", "name": "Divape", "image": "http://dummyimage.com/165x223.bmp/ff4444/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000004", "support": true, "link": "https://cdbaby.com/quis.json?luctus=ligula&et=in&ultrices=lacus&posuere=curabitur&cubilia=at&curae=ipsum&duis=ac&faucibus=tellus&accumsan=semper&odio=interdum&curabitur=mauris&convallis=ullamcorper&duis=purus&consequat=sit&dui=amet&nec=nulla&nisi=quisque&volutpat=arcu&eleifend=libero&donec=rutrum&ut=ac&dolor=lobortis&morbi=vel&vel=dapibus", "name": "Browseblab", "image": "http://dummyimage.com/194x197.jpg/cc0000/ffffff" },
        { "id": "5d8fbd88fc13ae7aa2000009", "support": true, "link": "https://surveymonkey.com/nisi/eu/orci/mauris/lacinia.xml?non=ligula&mi=vehicula&integer=consequat&ac=morbi&neque=a&duis=ipsum", "name": "Skyvu", "image": "http://dummyimage.com/203x182.bmp/dddddd/000000" }
    ],
    user: {
        "universityName": "University of Texas, Arlington ",
        "name": "Imtiaz Khaled",
        "email": "imtiazkhaled07@gmail.com",
        "id": "5d904979fc13ae5228000000",
        "jobApplicationLocation": "Texas",
        "urlGithub": "https://github.com/ImtiazKhaled",
        "urlLinkedin": "https://www.linkedin.com/in/imtiaz-mujtaba-khaled-47b887171/",
        "urlPortfolio": "https://imtiazkhaled.github.io/my-portfolio/#/",
        "photoUrl": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/53551206_2204740312879455_1797005387409391616_n.jpg?_nc_cat=107&_nc_oc=AQnTpnev2LAq8UxjhXfUILrAqCb1KlrSdeO8J3iInd9zN6-WFPg7HjnDBTutH0jWdtE&_nc_ht=scontent-dfw5-1.xx&oh=e8df0761c0776472f42bbfc2eaca6d16&oe=5E30B1F1"
    },

}

export const RootReducer = (state = initState, action) => {

    switch (action.type) {


        default:
            return state
    }
}