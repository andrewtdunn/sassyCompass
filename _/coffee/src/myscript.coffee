pixGrid = do ->
    myNode = document.querySelector "#artist .pixGrid ul"

    centerImage = (theImage)->
        myDifX = (window.innerWidth - theImage.width)/2
        myDiffY = (window.innerHeight - theImage.width)/2

        theImage.style.top = myDiffY + 'px'
        theImage.style.left = myDifX + 'px'

        theImage

    myNode.addEventListener "click", ((e)->
        myOverlay = document.createElement "div"
        document.body.appendChild myOverlay

        #set up overlay styles
        myOverlay.style.position = "absolute"
        myOverlay.style.top = 0
        myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)"
        myOverlay.style.cursor = "pointer"

        # resize and position overlay
        myOverlay.style.width = window.innerWidth + 'px'
        myOverlay.style.height = window.innerHeight + 'px'
        myOverlay.style.top = window.pageYOffset + 'px'
        myOverlay.style.left = window.pageXOffset + 'px'

        imageSrc = e.target.src;
        largeImage = document.createElement 'img'
        largeImage.id = 'largeImage'
        largeImage.style.display = 'block'
        largeImage.style.position = 'absolute'

        #wait until the image has loaded
        largeImage.addEventListener "load", ->

            # Resize if taller
            if (@height > window.innerHeight)
                @ratio = window.innerHeight / @height
                @height = @height * @ratio
                @width = @width * @ratio

            # Resize if wider
            if (@width > window.innerWidth)
                @ratio = window.innerWidth / @height
                @height = @height * @ratio
                @width = @width * @ratio

            center image @
            myOverlay.appendChild @

            largeImage.addEventListener 'click', (->
                if (myOverlay)
                    window.removeEventListener 'resize', window, false
                    window.removeEventListener 'scroll', window, false
                    myOverlay.parentNode.removeChild myOverlay
                    return
                ), false

            window.addEventListener 'scroll', (->
                    if (myOverlay)
                        myOverlay.style.width = window.innerWidth + 'px'
                        myOverlay.style.height = window.innerHeight + 'px'
                        myOverlay.style.top = window.pageYOffset + 'px'
                        myOverlay.style.left = window.pageXOffset + 'px'
                    centerImage largeImage
                    return
                ), false

            return

        ), false

    return




