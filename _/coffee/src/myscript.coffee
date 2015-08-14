pixGrid = do ->
    myNode = document.querySelector "#artistlist .pixgrid"

    centerImage = (theImage)->
        myDifX = (window.innerWidth - theImage.width)/2
        myDiffY = (window.innerHeight - theImage.height)/2

        theImage.style.top = myDiffY + 'px'
        theImage.style.left = myDifX + 'px'

        theImage


    myNode.addEventListener "click", ((e)->
        console.log e.target.tagName

        if (e.target.tagName == "IMG")
            myOverlay = document.createElement "div"
            myOverlay.id = 'overlay'
            document.body.appendChild myOverlay

            # set up overlay styles
            myOverlay.style.position = "absolute"
            myOverlay.style.top = 0
            myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)'
            myOverlay.style.cursor = 'pointer'

            # resize and position overlay
            myOverlay.style.width = window.innerWidth + 'px'
            myOverlay.style.height = window.innerHeight + 'px'
            myOverlay.style.top = window.pageYOffset  + 'px'
            myOverlay.style.left = window.pageXOffset + 'px'

            imageSrc = e.target.src
            largeImage = document.createElement 'img'
            largeImage.id = 'largeImage'
            largeImage.src = imageSrc.substring(0, imageSrc.length - 7) + '.jpg';
            largeImage.style.display = 'block'
            largeImage.style.position = 'absolute'

            # wait until the image has loaded
            largeImage.addEventListener 'load', ((e)->

                # Resize if taller
                if (@height > window.innerHeight)
                    @ratio = window.innerHeight / @height
                    @height = @height * @ratio
                    @width = @width * @ratio

                # Resize if wider
                if (@height > window.innerWidth)
                    @ratio = window.innerWidth / @width
                    @height = @height * @ratio
                    @width = @width * @ratio

                centerImage @
                myOverlay.appendChild @

                largeImage.addEventListener 'click', ((e)->
                    if (myOverlay)
                        window.removeEventListener 'resize', window, false
                        window.removeEventListener 'scroll', window, false
                        myOverlay.parentNode.removeChild myOverlay
                    ), false

                window.addEventListener 'scroll', ((e)->
                    if (myOverlay)
                        myOverlay.style.top = window.pageYOffset  + 'px'
                        myOverlay.style.left = window.pageXOffset + 'px'
                    ), false

                window.addEventListener 'scroll', ((e)->
                    if (myOverlay)
                        myOverlay.style.width = window.innerWidth + 'px'
                        myOverlay.style.height = window.innerHeight + 'px'
                        myOverlay.style.top = window.pageYOffset + 'px';
                        myOverlay.style.left = window.pageXOffset + 'px'
                    ), false

                ), false



        ), false
