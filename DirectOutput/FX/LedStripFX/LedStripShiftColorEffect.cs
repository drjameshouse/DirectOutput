﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DirectOutput.Cab.Color;

namespace DirectOutput.FX.LedStripFX
{
   public class LedStripShiftColorEffect:LedStripEffectBase
    {

        private RGBAColor _ActiveColor = new RGBAColor(0xff, 0xff, 0xff, 0xff);

        /// <summary>
        /// Gets or sets the active color.
        /// The ColorSetMode property defines how this value is used.
        /// </summary>
        /// <value>
        /// The active color.
        /// </value>
        public RGBAColor ActiveColor
        {
            get { return _ActiveColor; }
            set { _ActiveColor = value; }
        }

        private RGBAColor _InactiveColor = new RGBAColor(0, 0, 0, 0);

        /// <summary>
        /// Gets or sets the inactive color.
        /// The ColorSetMode property defines how this value is used.
        /// </summary>
        /// <value>
        /// The inactive color.
        /// </value>
        public RGBAColor InactiveColor
        {
            get { return _InactiveColor; }
            set { _InactiveColor = value; }
        }


        private ColorSetModeEnum _ColorSetMode = ColorSetModeEnum.OnOff;

        /// <summary>
        /// Gets or sets the color set mode.
        /// </summary>
        /// <value>
        /// Fade (active and inactive color will fade depending on trigger value) or OnOff (actvice color is used for triger values >0, otherwise inactive color will be used).
        /// </value>
        public ColorSetModeEnum ColorSetMode
        {
            get { return _ColorSetMode; }
            set { _ColorSetMode = value; }
        }


        private ShiftDirectionEnum _ShiftDirection=ShiftDirectionEnum.Right;

        /// <summary>
        /// Gets or sets the shift direction resp. the direction in which the color moves.
        /// </summary>
        /// <value>
        /// The shift direction (Left, Right, Up, Down).
        /// </value>
        public ShiftDirectionEnum ShiftDirection
        {
            get { return _ShiftDirection; }
            set { _ShiftDirection = value; }
        }

        private float _ShiftSpeed=200;

        /// <summary>
        /// Gets or sets the shift speed in percentage of the effect area per second.
        /// A speed setting of 100 will shift through the whole area of the effect in 1 second. 200 will shift through the effect area in .5 seconds. 33 will shift through the effect area in approx. 3 seconds. 
       /// Max. speed is 10000 (shift through the effect area in 1/100 seconds). Min. speed is 1 (shifts through the effect area in 100 seconds). 
       /// </summary>
        /// <value>
        /// The shift speed in percentage of the effect area (Left, Top, Width, Height properties) per second .
        /// </value>
        public float ShiftSpeed
        {
            get { return _ShiftSpeed; }
            set { _ShiftSpeed = value.Limit(1,10000); }
        }



        public override void Trigger(Table.TableElementData TableElementData)
        {
            throw new NotImplementedException();
        }
    }
}
