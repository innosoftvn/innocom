<template>
<div class="s-container" ref="container">
    <div class="s-content" ref="content">
        <slot></slot>
    </div>
    <div class="s-bar" ref="scroll"></div>
</div>
</template>
<script>
export default {
    mounted() {
        var container = this.$refs.container,
            content = this.$refs.content,
            scroll = this.$refs.scroll;

        content.addEventListener('scroll', function(e) {
            scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
            scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
        });
        var event = new Event('scroll');

        window.addEventListener('resize', content.dispatchEvent.bind(content, event));
        content.dispatchEvent(event);

        scroll.addEventListener('mousedown', function(start) {
            start.preventDefault();
            var y = scroll.offsetTop;
            var onMove = function(end) {
                var delta = end.pageY - start.pageY;
                scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
                content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', onMove);
            });
        });
    }
}
</script>
<style lang="scss">
.s-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .s-bar:active,
    &:hover .s-bar {
        opacity: 1;
    }

    .s-content {
        height: 100%;
        margin-right: -17px;
        padding-right: 5px;
        overflow: auto;
    }

    .s-bar {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        width: 5px;
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        -webkit-transition: opacity 0.2s ease-in-out;
        -moz-transition: opacity 0.2s ease-in-out;
        -o-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;

        &:active,
        &:hover {
            opacity: 1;
        }
    }
}
</style>
