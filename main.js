var hiddenMenu = document.getElementById('hiddenContent')
var hiddenImg = document.getElementById('imageHidden')
var hiddenProductName = document.getElementById('productName')
var hiddenProductDescription = document.getElementById('description')
const bodySite = document.getElementById('body')
var linkimage = document.getElementById('linkimg')
var pricetag = document.getElementById('price')


    const box1image = document.getElementById('imageBox1')
    const box1ProductName = document.getElementById('box1ProductN') 
    const box1ProductDescription = document.getElementById('box1ProductD')    
    const backhidden = document.getElementById('hiddenBackarrow')   

    box1image.addEventListener('click', function(){
     hiddenMenu.style.display = "flex" 
     hiddenImg.src = box1image.src
    pricetag.innerHTML = "₱200"
     hiddenProductName.innerHTML = box1ProductName.innerHTML
     hiddenProductDescription.innerHTML = box1ProductDescription.innerHTML
      linkimage.href = box1image.src
        bodySite.style.overflow = "hidden"
     hiddenImg.scrollIntoView({
        behavior: "smooth", inline: "center"
        
    })
        backhidden.addEventListener('click', function(){
        hiddenMenu.style.display = "none"
        bodySite.style.overflow = "scroll"

        box1image.scrollIntoView({
            behavior: "smooth",block:"center", inline: "center"
        })
    })

    })

    
    const box2image = document.getElementById('box2img')
    const box2name = document.getElementById('box2name')
    const box2productDes = document.getElementById('box2des')

    box2image.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box2image.src
        pricetag.innerHTML = "₱250"
        hiddenProductName.innerHTML = box2name.innerHTML
        hiddenProductDescription.innerHTML = box2productDes.innerHTML
        linkimage.href = box2image.src
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box2image.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    
    })

    const box3 = document.getElementById('box3')
    const box3Name = document.getElementById('box3Name')
    const box3Des = document.getElementById('box3Des')


    box3.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box3.src
        pricetag.innerHTML = "₱300"
        hiddenProductName.innerHTML = box3Name.innerHTML
        hiddenProductDescription.innerHTML = box3Des.innerHTML
        linkimage.href = box3.src
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box3.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    
    })
    
    const box4 = document.getElementById('box4')
    const box4name = document.getElementById('box4name')
    const box4des = document.getElementById('box4des')

    box4.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box4.src
        pricetag.innerHTML = "₱280"
        hiddenProductName.innerHTML = box4name.innerHTML
        linkimage.href = box4.src
        hiddenProductDescription.innerHTML = box4des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box4.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })

    })

    const box5 = document.getElementById("box5")
    const box5name = document.getElementById('box5name')
    const box5des = document.getElementById('box5des')
        
    box5.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box5.src
        pricetag.innerHTML = "₱120"
        hiddenProductName.innerHTML = box5name.innerHTML
        linkimage.href = box5.src
        hiddenProductDescription.innerHTML = box5des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box5.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })

    })

    const box6 = document.getElementById('box6')
    const box6name = document.getElementById('box6name')
    const box6des = document.getElementById('box6des')

        
    box6.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box6.src
        pricetag.innerHTML = "₱130"
        hiddenProductName.innerHTML = box6name.innerHTML
        linkimage.href = box6.src
        hiddenProductDescription.innerHTML = box6des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box6.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    })

    const box7 = document.getElementById('box7')
    const box7name = document.getElementById ('box7name')
    const box7des = document.getElementById('box7des')

    box7.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box7.src
        pricetag.innerHTML = "₱290"
        hiddenProductName.innerHTML = box7name.innerHTML
        linkimage.href = box7.src
        hiddenProductDescription.innerHTML = box7des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box7.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    })


    const box8 = document.getElementById('box8')
    const box8name = document.getElementById('box8name')
    const box8des =document.getElementById('box8des')
        
    box8.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box8.src
        pricetag.innerHTML = "₱220"
        hiddenProductName.innerHTML = box8name.innerHTML
        linkimage.href = box8.src
        hiddenProductDescription.innerHTML = box8des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box8.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    })

    const box9 = document.getElementById('box9')
    const box9name = document.getElementById('box9name')
    const box9des = document.getElementById('box9des')
    
    box9.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box9.src
        pricetag.innerHTML = "₱320"
        hiddenProductName.innerHTML = box9name.innerHTML
        hiddenProductDescription.innerHTML = box9des.innerHTML
        linkimage.href = box9.src
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box9.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    })

    const box10 = document.getElementById('box10')
    const box10name = document.getElementById('box10name')
    const box10des = document.getElementById('box10des')

    box10.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = box10.src
        pricetag.innerHTML = "₱360"
        hiddenProductName.innerHTML = box10name.innerHTML
        linkimage.href = box10.src
        hiddenProductDescription.innerHTML = box10des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            box10.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    })
                                ///shoes///


    const shoes1 = document.getElementById('shoes1')
    const shoes1Name = document.getElementById('shoes1Name')
    const shoes1Des = document.getElementById('shoes1Des')

    shoes1.addEventListener('click', function(){
        hiddenMenu.style.display = "flex" 
        hiddenImg.src = shoes1.src
        pricetag.innerHTML = "₱450"
        hiddenProductName.innerHTML = shoes1Name.innerHTML
        linkimage.href = shoes1.src
        hiddenProductDescription.innerHTML =shoes1Des.innerHTML
        bodySite.style.overflow = "hidden"

        hiddenImg.scrollIntoView({
            behavior: "smooth",block:"center"
        })
        backhidden.addEventListener('click', function(){
            hiddenMenu.style.display = "none"
            bodySite.style.overflow = "scroll"
    
            shoes1.scrollIntoView({
                behavior: "smooth",block:"center", inline: "center"
            })
        })
    })

        const shoes2 = document.getElementById('shoes2')
        const shoes2Name = document.getElementById('shoes2Name')
        const shoes2Des = document.getElementById('shoes2Des')
        
        shoes2.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes2.src
            pricetag.innerHTML = "₱350"
            hiddenProductName.innerHTML = shoes2Name.innerHTML
            linkimage.href = shoes2.src
            hiddenProductDescription.innerHTML =shoes2Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes2.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })
    
        const shoes3 = document.getElementById('shoes3')
        const shoes3Name = document.getElementById('shoes3Name')
        const shoes3Des = document.getElementById('shoes3Des')

        shoes3.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes3.src
            pricetag.innerHTML = "₱600"
            hiddenProductName.innerHTML = shoes3Name.innerHTML
            linkimage.href = shoes3.src
            hiddenProductDescription.innerHTML =shoes3Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes3.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })
    
        const shoes4 = document.getElementById('shoes4')
        const shoes4Name = document.getElementById('shoes4Name')
        const shoes4Des  = document.getElementById('shoes4Des')
         
        shoes4.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes4.src
            pricetag.innerHTML = "₱500"
            hiddenProductName.innerHTML = shoes4Name.innerHTML
            linkimage.href = shoes4.src
            hiddenProductDescription.innerHTML =shoes4Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes4.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })
    
        const shoes5 = document.getElementById('shoes5')
        const shoes5Name = document.getElementById('shoes5Name')
        const shoes5Des = document.getElementById('shoes5Des')

        shoes5.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes5.src
            pricetag.innerHTML = "₱650"
            hiddenProductName.innerHTML = shoes5Name.innerHTML
            linkimage.href = shoes5.src
            hiddenProductDescription.innerHTML =shoes5Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes5.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        const shoes6 = document.getElementById('shoes6')
        const shoes6Name = document.getElementById('shoes6Name')
        const shoes6Des = document.getElementById('shoes6Des')

        shoes6.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes6.src
            pricetag.innerHTML = "₱450"
            hiddenProductName.innerHTML = shoes6Name.innerHTML
            linkimage.href = shoes6.src
            hiddenProductDescription.innerHTML =shoes6Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes6.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })
    
        
        const shoes7 = document.getElementById('shoes7')
        const shoes7Name = document.getElementById('shoes7Name')
        const shoes7Des = document.getElementById('shoes7Des')

        shoes7.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes7.src
            pricetag.innerHTML = "₱750"
            hiddenProductName.innerHTML = shoes7Name.innerHTML
            linkimage.href = shoes7.src
            hiddenProductDescription.innerHTML =shoes7Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes7.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        const shoes8 = document.getElementById('shoes8')
        const shoes8Name = document.getElementById('shoes8Name')
        const shoes8Des = document.getElementById('shoes8Des')

        shoes8.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes8.src
            pricetag.innerHTML = "₱620"
            hiddenProductName.innerHTML = shoes8Name.innerHTML
            linkimage.href = shoes8.src
            hiddenProductDescription.innerHTML =shoes8Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes8.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const shoes9 = document.getElementById('shoes9')
        const shoes9Name = document.getElementById('shoes9Name')
        const shoes9Des = document.getElementById('shoes9Des')

        shoes9.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes9.src
            pricetag.innerHTML = "₱720"
            hiddenProductName.innerHTML = shoes9Name.innerHTML
            linkimage.href = shoes9.src
            hiddenProductDescription.innerHTML =shoes9Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes9.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })


        const shoes10 = document.getElementById('shoes10')
        const shoes10Name = document.getElementById('shoes10Name')
        const shoes10Des = document.getElementById('shoes10Des')

        shoes10.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = shoes10.src
            pricetag.innerHTML = "₱450"
            hiddenProductName.innerHTML = shoes10Name.innerHTML
            linkimage.href = shoes10.src
            hiddenProductDescription.innerHTML =shoes10Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                shoes6.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })


        ////bags...//////

        const bag1 = document.getElementById('bag1')
        const bag1Name = document.getElementById('bag1Name')
        const bag1Des = document.getElementById('bag1Des')

        bag1.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag1.src
            pricetag.innerHTML = "₱250"
            hiddenProductName.innerHTML = bag1Name.innerHTML
            linkimage.href = bag1.src
            hiddenProductDescription.innerHTML =bag1Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag1.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const bag2 = document.getElementById('bag2')
        const bag2Name = document.getElementById('bag2Name')
        const bag2Des = document.getElementById('bag2Des')

        bag2.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag2.src
            pricetag.innerHTML = "₱350"
            hiddenProductName.innerHTML = bag2Name.innerHTML
            linkimage.href = bag2.src
            hiddenProductDescription.innerHTML =bag2Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag2.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        const bag3 = document.getElementById('bag3')
        const bag3Name = document.getElementById('bag3Name')
        const bag3Des = document.getElementById('bag3Des')

        bag3.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag3.src
            pricetag.innerHTML = "₱650"
            hiddenProductName.innerHTML = bag3Name.innerHTML
            linkimage.href = bag3.src
            hiddenProductDescription.innerHTML =bag3Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag3.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        const bag4 = document.getElementById('bag4')
        const bag4Name = document.getElementById('bag4Name')
        const bag4Des = document.getElementById('bag4Des')

        bag4.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag4.src
            pricetag.innerHTML = "₱450"
            hiddenProductName.innerHTML = bag4Name.innerHTML
            linkimage.href = bag4.src
            hiddenProductDescription.innerHTML =bag4Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag4.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })
        
        const bag5 = document.getElementById('bag5')
        const bag5Name = document.getElementById('bag5Name')
        const bag5Des = document.getElementById('bag5Des')

        bag5.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag5.src
            pricetag.innerHTML = "₱500"
            hiddenProductName.innerHTML = bag5Name.innerHTML
            linkimage.href = bag5.src
            hiddenProductDescription.innerHTML =bag5Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag5.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const bag6 = document.getElementById('bag6')
        const bag6Name = document.getElementById('bag6Name')
        const bag6Des = document.getElementById('bag6Des')

        bag6.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag6.src
            pricetag.innerHTML = "₱600"
            hiddenProductName.innerHTML = bag6Name.innerHTML
            linkimage.href = bag6.src
            hiddenProductDescription.innerHTML =bag6Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag6.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const bag7 = document.getElementById('bag7')
        const bag7Name = document.getElementById('bag7Name')
        const bag7Des = document.getElementById('bag7Des')

        bag7.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag7.src
            pricetag.innerHTML = "₱500"
            hiddenProductName.innerHTML = bag5Name.innerHTML
            linkimage.href = bag7.src
            hiddenProductDescription.innerHTML =bag7Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag7.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const bag8 = document.getElementById('bag8')
        const bag8Name = document.getElementById('bag8Name')
        const bag8Des = document.getElementById('bag8Des')

        bag8.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag8.src
            pricetag.innerHTML = "₱600"
            hiddenProductName.innerHTML = bag5Name.innerHTML
            linkimage.href = bag8.src
            hiddenProductDescription.innerHTML =bag8Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag8.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const bag9 = document.getElementById('bag9')
        const bag9Name = document.getElementById('bag9Name')
        const bag9Des = document.getElementById('bag9Des')

        bag9.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag9.src
            pricetag.innerHTML = "₱500"
            hiddenProductName.innerHTML = bag9Name.innerHTML
            linkimage.href = bag9.src
            hiddenProductDescription.innerHTML =bag9Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag9.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        
        const bag10 = document.getElementById('bag10')
        const bag10Name = document.getElementById('bag10Name')
        const bag10Des = document.getElementById('bag10Des')

        bag10.addEventListener('click', function(){
            hiddenMenu.style.display = "flex" 
            hiddenImg.src = bag10.src
            pricetag.innerHTML = "₱500"
            hiddenProductName.innerHTML = bag10Name.innerHTML
            linkimage.href = bag10.src
            hiddenProductDescription.innerHTML =bag10Des.innerHTML
            bodySite.style.overflow = "hidden"
    
            hiddenImg.scrollIntoView({
                behavior: "smooth",block:"center"
            })
            backhidden.addEventListener('click', function(){
                hiddenMenu.style.display = "none"
                bodySite.style.overflow = "scroll"
        
                bag10.scrollIntoView({
                    behavior: "smooth",block:"center", inline: "center"
                })
            })
        })

        ////////...........Jackaets......////////

            const jacket1 = document.getElementById('jacket1')
            const jacket1Name = document.getElementById('jacket1Name')
            const jacket1Des = document.getElementById('jacket1Des')

            jacket1.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket1.src
                pricetag.innerHTML = "₱250"
                hiddenProductName.innerHTML = jacket1Name.innerHTML
                linkimage.href = jacket1.src
                hiddenProductDescription.innerHTML =jacket1Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket1.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket2 = document.getElementById('jacket2')
            const jacket2Name = document.getElementById('jacket2Name')
            const jacket2Des = document.getElementById('jacket2Des')

            jacket2.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket2.src
                pricetag.innerHTML = "₱350"
                hiddenProductName.innerHTML = jacket2Name.innerHTML
                linkimage.href = jacket2.src
                hiddenProductDescription.innerHTML =jacket2Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket2.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket3 = document.getElementById('jacket3')
            const jacket3Name = document.getElementById('jacket3Name')
            const jacket3Des = document.getElementById('jacket3Des')

            jacket3.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket3.src
                pricetag.innerHTML = "₱520"
                hiddenProductName.innerHTML = jacket3Name.innerHTML
                linkimage.href = jacket3.src
                hiddenProductDescription.innerHTML =jacket3Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket3.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })


            
            const jacket4 = document.getElementById('jacket4')
            const jacket4Name = document.getElementById('jacket4Name')
            const jacket4Des = document.getElementById('jacket4Des')

            jacket4.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket4.src
                pricetag.innerHTML = "₱620"
                hiddenProductName.innerHTML = jacket4Name.innerHTML
                linkimage.href = jacket4.src
                hiddenProductDescription.innerHTML =jacket4Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket4 .scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket5 = document.getElementById('jacket5')
            const jacket5Name = document.getElementById('jacket5Name')
            const jacket5Des = document.getElementById('jacket5Des')

            jacket5.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket5.src
                pricetag.innerHTML = "₱450"
                hiddenProductName.innerHTML = jacket5Name.innerHTML
                linkimage.href = jacket5.src
                hiddenProductDescription.innerHTML =jacket5Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket5.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket6 = document.getElementById('jacket6')
            const jacket6Name = document.getElementById('jacket6Name')
            const jacket6Des = document.getElementById('jacket6Des')

            jacket6.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket6.src
                pricetag.innerHTML = "₱250"
                hiddenProductName.innerHTML = jacket6Name.innerHTML
                linkimage.href = jacket6.src
                hiddenProductDescription.innerHTML =jacket6Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket6.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket7 = document.getElementById('jacket7')
            const jacket7Name = document.getElementById('jacket7Name')
            const jacket7Des = document.getElementById('jacket7Des')

            jacket7.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket7.src
                pricetag.innerHTML = "₱200"
                hiddenProductName.innerHTML = jacket7Name.innerHTML
                linkimage.href = jacket7.src
                hiddenProductDescription.innerHTML =jacket7Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket7.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket8 = document.getElementById('jacket8')
            const jacket8Name = document.getElementById('jacket8Name')
            const jacket8Des = document.getElementById('jacket8Des')

            jacket8.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket8.src
                pricetag.innerHTML = "₱600"
                hiddenProductName.innerHTML = jacket8Name.innerHTML
                linkimage.href = jacket8.src
                hiddenProductDescription.innerHTML =jacket8Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket8.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

            
            const jacket9 = document.getElementById('jacket9')
            const jacket9Name = document.getElementById('jacket9Name')
            const jacket9Des = document.getElementById('jacket9Des')

            jacket9.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket9.src
                pricetag.innerHTML = "₱450"
                hiddenProductName.innerHTML = jacket9Name.innerHTML
                linkimage.href = jacket9.src
                hiddenProductDescription.innerHTML =jacket9Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket9.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })


            
            const jacket10 = document.getElementById('jacket10')
            const jacket10Name = document.getElementById('jacket10Name')
            const jacket10Des = document.getElementById('jacket10Des')

            jacket10.addEventListener('click', function(){
                hiddenMenu.style.display = "flex" 
                hiddenImg.src = jacket10.src
                pricetag.innerHTML = "₱350"
                hiddenProductName.innerHTML = jacket10Name.innerHTML
                linkimage.href = jacket10.src
                hiddenProductDescription.innerHTML =jacket10Des.innerHTML
                bodySite.style.overflow = "hidden"
        
                hiddenImg.scrollIntoView({
                    behavior: "smooth",block:"center"
                })
                backhidden.addEventListener('click', function(){
                    hiddenMenu.style.display = "none"
                    bodySite.style.overflow = "scroll"
            
                    jacket10.scrollIntoView({
                        behavior: "smooth",block:"center", inline: "center"
                    })
                })
            })

const Imgae = ['source/tshirts/T-shirt_6-removebg-preview.png','source/bags2/bag_4-removebg-preview.png','source/jacket/jacket_3-removebg-preview.png','source/bags2/bag_10-removebg-preview.png','source/shouse/yellow.png','source/bags2/love.png','source/tshirts/3-removebg-preview.png']
var display = document.getElementById('Image')
var currentIndex = 0

function Changeimg(){
   display.style.opacity = 0
   display.style.translate = ('200px')
      setTimeout(function(){ 
         currentIndex = (currentIndex + 1) % Imgae.length
         display.src = Imgae[currentIndex]
         display.style.opacity= 1   
         display.style.translate = 0
         
      },400)
    
}
display.addEventListener('click', function() {
   Changeimg();
})

function Prev(){
   display.style.opacity = 0
   display.style.translate = ('-200px')

      setTimeout(function(){
         currentIndex = (currentIndex - 1) % Imgae.length
        
         
         display.style.opacity= 1   
         display.style.translate = 0
         if(currentIndex < 0){
            currentIndex = 5
           
         }else{
           display.src = "ource/tshirts/3-removebg-preview.png"
         } 
         
         display.src = Imgae[currentIndex]
      },400)
     
}
display.addEventListener('click', function() {
   Changeimg();
})

var section1 = document.getElementById('content1')
function letsGo(){ 
    productparts.scrollIntoView({
        behavior: "smooth",block:"center"
        
    })
   

}
var tshirtScroll = document.getElementById('tshirtContent')
    tshirtScroll.addEventListener('click',function(){
        section1.scrollIntoView({
            behavior: "smooth",block:"center"
        })
})
var shoesScroll = document.getElementById('shoesContent')
var section2 = document.getElementById('shoesSection')
 shoesScroll.addEventListener('click',function(){
    section2.scrollIntoView({
        behavior: "smooth",block:"center"
    })
 })

 var bagScroll = document.getElementById('bagContent')
 var section3 = document.getElementById('bagSection')

 bagScroll.addEventListener('click',function(){
    section3.scrollIntoView({
        behavior: "smooth",block:"center"
    })
 })
 var jacketScroll = document.getElementById('jacketContent')
 var section4 = document.getElementById('jacketSection')
jacketScroll.addEventListener('click',function(){
    section4.scrollIntoView({
        behavior: "smooth",block:"center"
    })
 })

 var homeScroll = document.getElementById('homeSection')
 var home = document.getElementById('homeMain')

    homeScroll.addEventListener('click',function(){
        home.scrollIntoView({
            behavior: "smooth"
        })
    })
    var productScroll = document.getElementById('ProductSection')
    var productparts = document.getElementById('productPart')
    productScroll.addEventListener('click',function(){
        productparts.scrollIntoView({
            behavior: "smooth",block:"center"
        })
    })
    
    
    document.addEventListener('DOMContentLoaded', function () {
  var arrowRight   = document.getElementById('arrowRight')
  var arrowLeft   = document.getElementById('arrowLeft') 

  var arrowRightShoes   = document.getElementById('arrowRightShoes')
  var arrowLeftShoes   = document.getElementById('arrowLeftShoes')

  var arrowLeftBag = document.getElementById('arrowLeftBag')
  var arrowRightBag = document.getElementById('arrowRightBag')

  var arrowLeftJacket = document.getElementById('arrowLeftJacket')
  var arrowRightJacket = document.getElementById('arrowRightJacket')      
    var scrollStep =850

    arrowRight.addEventListener('click',function(){
            document.querySelector('.content1').scrollBy(scrollStep,0)
    
    })

    arrowLeft.addEventListener('click',function(){
        document.querySelector('.content1').scrollBy(-scrollStep,0)
    })
    
    
  
      arrowRightShoes.addEventListener('click',function(){
          document.querySelector('.content2').scrollBy(scrollStep,0)
          
     
      })
  
      arrowLeftShoes.addEventListener('click',function(){
          document.querySelector('.content2').scrollBy(-scrollStep,0)
      })


     arrowRightBag.addEventListener('click',function(){
        document.querySelector('.content3').scrollBy(scrollStep,0)
        
   
    })

    arrowLeftBag.addEventListener('click',function(){
        document.querySelector('.content3').scrollBy(-scrollStep,0)
    })

    arrowRightJacket.addEventListener('click',function(){
        document.querySelector('.content4').scrollBy(scrollStep,0)
        
   
    })

    arrowLeftJacket.addEventListener('click',function(){
        document.querySelector('.content4').scrollBy(-scrollStep,0)
    })
      
})

  var star1 = document.getElementById('star1')
  var star2 = document.getElementById('star2')
  var star3 = document.getElementById('star3')
  var star4 = document.getElementById('star4')
  var star5 = document.getElementById('star5')

   star1.addEventListener('click',function(){
    if(star1.style.color == "yellow"){
        star1.style.color = "white"
    }else{
        star1.style.color = "yellow"
    }
   })
   star2.addEventListener('click',function(){
    if(star2.style.color == "yellow"){
        star2.style.color = "white"
    }else{
        star2.style.color = "yellow"
    }
   })
   star3.addEventListener('click',function(){
    if(star3.style.color == "yellow"){
        star3.style.color = "white"
    }else{
        star3.style.color = "yellow"
    }
   })
   star4.addEventListener('click',function(){
    if(star4.style.color == "yellow"){
        star4.style.color = "white"
    }else{
        star4.style.color = "yellow"
    }
   })
   star5.addEventListener('click',function(){
    if(star5.style.color == "yellow"){
        star5.style.color = "white"
    }else{
        star5.style.color = "yellow"
    }
   })
