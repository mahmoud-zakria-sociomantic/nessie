import React                from 'react';
import PropTypes            from 'prop-types';

import Css                  from '../hoc/Css';
import Icon                 from '../Icon';
import Tooltip              from '../Tooltip';
import Text                 from '../Text';

const IconWithTooltip = ( {
    children,
    className,
    cssMap,
    iconIsVisible,
    iconPosition,
    iconSize,
    iconType,
    isDisabled,
    message,
    noWrap,
    onMouseOut,
    onMouseOver,
    overflowIsHidden,
    tooltipIsVisible,
    tooltipPosition } ) =>
{
    let contentNode = children;

    if ( typeof children === 'string' )
    {
        contentNode = (
            <Text
                overflowIsHidden = { overflowIsHidden }
                noWrap           = { noWrap }>
                { children }
            </Text>
        );
    }

    return (
        <Css
            cssMap   = { cssMap }
            cssProps = { {
                iconVisible : iconIsVisible,
                position    : !!children && iconPosition
            } }>
            <div className = { className }>
                { children &&
                    <div className = { cssMap.content }>
                        { contentNode }
                    </div>
                }
                { iconIsVisible &&
                    <Tooltip
                        className   = { cssMap.iconWithTooltip }
                        message     = { message }
                        isVisible   = { tooltipIsVisible }
                        position    = { tooltipPosition }
                        onMouseOver = { onMouseOver }
                        onMouseOut  = { onMouseOut }>
                        <Icon
                            className = { cssMap.icon }
                            isDisabled = { isDisabled }
                            size       = { iconSize }
                            type       = { iconType } />
                    </Tooltip>
                }
            </div>
        </Css>
    );
};

IconWithTooltip.propTypes =
{
    /**
    *  Node that the Tooltip wraps
    */
    children      : PropTypes.node,
    /**
     * Icon visibility
     */
    iconIsVisible : PropTypes.bool,
    /**
    *  Icon position relative to wrapped component
    */
    iconPosition  : PropTypes.oneOf( [
        'right',
        'left',
        'topRight',
        'topLeft' ] ),
    /**
    *  Icon to show
    */
    iconType : PropTypes.oneOf( [
        'info',
        'alert',
        'error',
        'approved',
        'declined',
        'pending',
        'ended',
        'validation' ] ),
    /**
     *  Icon size
     */
    iconSize         : PropTypes.oneOf( [ 'S', 'M', 'L', 'XL', 'XXL' ] ),
    /**
     * is disabled
     */
    isDisabled       : PropTypes.bool,
    /**
    *  Tooltip message text (string or JSX)
    */
    message          : PropTypes.node,
    /**
    *  Display the tooltip
    */
    tooltipIsVisible : PropTypes.bool,
    /**
    *  Tooltip position relative to the icon
    */
    tooltipPosition  : PropTypes.oneOf( [
        'left',
        'right',
        'top',
        'bottom',
        'topLeft',
        'topRight' ] ),
    /**
    *  onMouseOut callback function: ( e ) = { ... }
    */
    onMouseOut       : PropTypes.func,
    /**
    *  onMouseOver callback function: ( e ) = { ... }
    */
    onMouseOver      : PropTypes.func,
    /**
    *  Hides wrapped content overflow
    */
    overflowIsHidden : PropTypes.bool,
    /**
     *  Text won´t wrap to the next line.
     */
    noWrap           : PropTypes.bool
};

IconWithTooltip.defaultProps =
{
    iconType         : 'info',
    iconSize         : 'M',
    iconIsVisible    : true,
    iconPosition     : 'right',
    isDisabled       : false,
    noWrap           : false,
    tooltipPosition  : 'top',
    tooltipIsVisible : false,
    overflowIsHidden : false,
    cssMap           : require( './iconWithTooltip.css' )
};

export default IconWithTooltip;
