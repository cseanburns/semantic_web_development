# Embedded Content: Images and Multimedia

## Introduction

It's no surprise that multimedia content dominates the web and thus it's no surprise that there are multiple HTML elements
that provide methods for publishing multimedia content.
In this lesson, we'll cover the following multimedia elements for embedding non-textual content in HTML documents.
These include:

- The `<video>` element for embedding video content
- The `<track>` element for providing captioning for video content
- The `<audio>` element for embedding audio content
- The `<img>` element for embedding images
- The `<picture>` element to facilitate how image respond to different device/screen sizes
- The `<figure>` element to group media content, including images and video, with an optional `<figcaption>` element for captions
- The `<iframe>` element is used to embed other HTML pages in our main HTML documents

A couple of things to note about multimedia.
First, multimedia content takes up more disk space and bandwidth than text content, and
therefore, be mindful of the size of the multimedia files that you are embedding in your web pages.
The bigger these files are, the longer they will take to load and to play, in the case of video or audio files.

Second, many hosting providers charge by bandwidth.
Therefore, since multimedia content consumes more bandwidth, multimedia content is more costly to host.
This is likely why many web developers embed third-party hosting solutions, such as YouTube, Vimeo, and others, to deliver video content.
The cost is offset to the owners of those companies, which support their own products via ads and subscriptions.
Although that may be a perfectly acceptable route for you to take as web developers,
it's still worthy to know how to host and disseminate your own multimedia content, if you desire.

## The `<video>` Element

The `<video>` element <q>embeds a media player</q> in a web page ([The Video Embed Element][video_mdn]).
The element groups other elements, including the `<source>` element.
The `<source>` element is used to source various video file formats for full browser support.
In the following example, I use the `<source>` element to refer to a video file in the `mp4` format and to a video file in the `webm` format.
Both files are stored in a separate multimedia directory in the project folder.
Both videos are otherwise equal,
but providing options for both acts as a fallback mechanism in case a browser doesn't support one or the other format.

```
<video controls autoplay="false" muted="true" width="600">
    <source src="media/example.mp4" type="video/mp4">
    <source src="media/example.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

The element accepts global attributes but also accepts attributes specific to the element.
These include `controls`, `autoplay`, `width`, and more.
The `controls` attribute adds functions to the embedded player, such as volume control, pause/resume playback, and more.
The `autoplay` attribute instructs the browser to enable or disable autoplay upon loading.
If set to `false`, autoplay is disabled (which is the humane thing to do for your site visitors!).
The `width` attribute sets a default width size for the embedded player.
An optional `height` attribute is also available.
Other attributes are listed at the MDN Web Docs link above.

## The `<audio>` Element

The `<audio>` element is used to embed an audio player in the HTML document ([The Audio Embed Element][audio_mdn]).
It uses some of the same attributes as the `<video>` element, such as `controls` to display specific playback controls in the player.
In the example below, I source two versions of the audio for maximum browser support: an `mp3` file and an `ogg` file.
Both files are stored in a multimedia directory in the project's main directory.

```
<audio controls>
    <source src="media/audio.mp3" type="audio/mpeg">
    <source src="media/audio.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>
```

## The `<track>` Element

The `<track>` element is used to provide subtitles, captions, and chapter titles for the `<video>` and `<audio>` elements.
This element uses the [WebVTT format][webvtt_w3c],
which is expressed as a text file that contains data,
like subtitles, with time stamps to align the data with the audio or video.
WebVTT files usually have `.vtt` filename extensions and can be created manually or automatically in text transcription software.
For example, Microsoft illustrates how WebVTT files can be created manually [for closed caption video][vtt_microsoft].
Other software, like [Zoom][vtt_zoom], automatically creates `.vtt` audio transcription files for cloud recordings.

In the example code below, I use the `<track>` element with the `kind` attribute to indicate that the `vtt` file is for subtitles.
See the link above for other `kind` attributes to use.

```
<video controls autoplay="false" width="600">
    <source src="media/example.mp4" type="video/mp4">
    <track src="media/captions.vtt" kind="subtitles"
        srclang="en" label="English">
</video>
```

## The `<img>` Element

The `<img>` element is used to display images, such as `png`, `jpg`, and other image files.
The `alt` attribute provides a textual description of the image in case the image fails to load in the browser.

Images taken with a camera are often too large to be used on the web, and they should be resized to smaller versions in a photo editor.
Once resized, we can use attributes like `width` and `height` to adjust how the image displays in the browser.

Note that the resized dimensions should correspond to the image's original dimensions, otherwise the image will be skewed.
For example, my phone camera is configured to take photos with dimensions set at *4038 x 2268* in landscape mode and
*2268 x 4032* in portrait mode.
This results in a big file size (around 3.2 MBs), which would display slowly on slow or poor internet connections.
Therefore, I might want to resize such images by a factor of six before using in a web document:
`4038 / 6 = 673` and `2268 / 6 = 378`.
Then I declare the sizes in the `width` and `height` 

```
<img src="media/walking_bridge.jpg"
    alt="A walking bridge over a stream"
    width="673"
    height="378">
```

See the [MDN Web Docs][img_mdn] for more details on how to use the `<img>` element.

## The `<picture>` Element

By default, the above `<img>` element should react responsively when resizing the display.
This is because browsers apply a default CSS setting (`max-width: 100%`) to images, which we will discuss later.
However, there may be times when it's helpful to provide different versions of an image by declaring multiple sources.
The `<picture>` element enables this by serving entirely two different images, depending on the size of the display or device
and not just resolutions ([The Picture Element][picture_mdn]).

In the example below, when the display is equal to or smaller than 672 pixels wide, the image loads `walking_bridge_small.jpg`,
which I've resized in a photo editor to have dimensions of `403 x 227 pixels`.
When the display is equal to or greater than 673 pixels wide,
the image loads `walking_bridge_big.jpg`, which has dimensions of `673 x 379 pixels`.

```
<picture>
    <source srcset="media/walking_bridge_small.jpg" media="(max-width: 672px)">
    <source srcset="media/walking_bridge_big.jpg" media="(min-width: 673px)">
    <img src="media/walking_bridge.jpg" alt="A walking bridge over a stream">
</picture>
```

Note the `<img>` tag is required in the `<picture>` element even though it primarily functions as a fallback image.
The `<source>` tags in the `<picture>` element only provide options to the browser for which source file to load upon which condition is met.

## The `<figure>` Element

We use the `<figure>` element to group media content, and that may include images or videos ([The Figure Element][figure_mdn]).
This element may also include an optional `<figcaption>` element, which provides a caption for the media.
This enables the caption to be semantically grouped with the figure.

```
<figure>
    <img src="media/plot.png" alt="a plot">
    <figcaption>a scientific plot</figcaption>
</figure>
```

## The `<iframe>` Element

The `<iframe>` element is used to embed a different HTML page within the current HTML page ([The Inline Frame Element][iframe_mdn]).
We can use this element to embed a regular text-based HTML document in our main HTML page, but
it's commonly used to display video from other sources, such as from YouTube, in our HTML documents.

For example, visit a YouTube video, click the **Share** button, and click the **Embed** option.
This will provide `<iframe>` code to use in our HTML pages.
Here's an example of a video from a great talk by the information scientist, [Karen Jones Spärck][sparck_wikipedia],
who helped develop the algorithms that search engines and other information retrieval systems use today to find relevant sources:

```
<iframe width="560" height="315"
    src="https://www.youtube.com/embed/5fYeKiebpuo?si=QcvAjF13AjhGkHMq"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
</iframe>
```

## Conclusion

The HTML5 media elements discussed here help seamlessly integrate multimedia content in our HTML pages.
We use the `<video>` and `<audio>` elements for rich media,
the `<track>` element to provide accessibility,
the `<img>` for images,
the `<picture>` elements to provide responsive images,
the `<figure>` element to group media,
and the `<iframe>` element to embed other HTML pages.

Be aware that the `<img>` element is inherently responsive in most cases due to browser defaults,
but the `<picture>` element allows serving different images entirely depending on device and screen size.
Also, be sure to use the `alt` attribute for images to provide fallback text for screen readers and for when images fail to load.

[audio_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
[figure_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
[iframe_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
[img_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
[picture_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
[sparck_wikipedia]:https://en.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones
[video_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
[vtt_microsoft]:https://support.microsoft.com/en-us/office/create-closed-captions-for-a-video-b1cfb30f-5b00-4435-beeb-2a25e115024b
[vtt_zoom]:https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927
[webvtt_w3c]:https://www.w3.org/TR/webvtt1/
