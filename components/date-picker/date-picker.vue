<template>
  <div :class="wrapClasses" v-clickoutside="handleClose">
    <div :class="inputWrapClasses" @click="toggleDropdown">
      <input
        :class="inputClasses"
        :value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        readonly
      >
      <span v-if="allowClear && displayValue" :class="`${prefixCls}-picker-clear`" @click.stop="handleClear">
        <icon type="cross-circle"></icon>
      </span>
      <span :class="`${prefixCls}-picker-icon`">
        <icon type="calendar"></icon>
      </span>
    </div>
    <transition name="ant-calendar-slide-up">
      <div v-show="visible" :class="panelClasses">
        <div :class="`${prefixCls}-header`">
          <a :class="`${prefixCls}-prev-year-btn`" @click="changeYear(-1)">«</a>
          <a :class="`${prefixCls}-prev-month-btn`" @click="changeMonth(-1)">‹</a>
          <span :class="`${prefixCls}-ym-select`">
            <span :class="`${prefixCls}-year-select`">{{ currentYear }}年</span>
            <span :class="`${prefixCls}-month-select`">{{ currentMonth + 1 }}月</span>
          </span>
          <a :class="`${prefixCls}-next-month-btn`" @click="changeMonth(1)">›</a>
          <a :class="`${prefixCls}-next-year-btn`" @click="changeYear(1)">»</a>
        </div>
        <div :class="`${prefixCls}-body`">
          <table :class="`${prefixCls}-table`" cellspacing="0">
            <thead>
              <tr>
                <th v-for="day in weekDays" :key="day">{{ day }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(week, wi) in calendarRows" :key="wi">
                <td
                  v-for="(cell, ci) in week"
                  :key="ci"
                  :class="cellClasses(cell)"
                  @click="selectDate(cell)"
                >
                  <div :class="`${prefixCls}-date`">{{ cell.day }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import moment from 'moment'
  import Icon from '../icon'
  import { oneOf } from '../_util/proptype'

  const clickoutside = {
    bind (el, binding) {
      el._clickOutside = (e) => {
        if (!el.contains(e.target)) {
          binding.value()
        }
      }
      document.addEventListener('click', el._clickOutside)
    },
    unbind (el) {
      document.removeEventListener('click', el._clickOutside)
    }
  }

  export default {
    name: 'atu-date-picker',
    directives: { clickoutside },
    props: {
      value: {
        type: [Object, String],
        default: undefined
      },
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      placeholder: {
        type: String,
        default: '请选择日期'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowClear: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return oneOf(value, ['large', 'default', 'small'])
        }
      },
      prefixCls: {
        type: String,
        default: 'ant-calendar'
      }
    },
    data () {
      const now = this.value ? moment(this.value) : moment()
      return {
        visible: false,
        currentYear: now.year(),
        currentMonth: now.month(),
        selectedDate: this.value ? moment(this.value) : null
      }
    },
    computed: {
      weekDays () {
        return ['日', '一', '二', '三', '四', '五', '六']
      },
      displayValue () {
        if (!this.selectedDate) return ''
        return this.selectedDate.format(this.format)
      },
      wrapClasses () {
        return [
          `${this.prefixCls}-picker`,
          {
            [`${this.prefixCls}-picker-open`]: this.visible,
            [`${this.prefixCls}-picker-disabled`]: this.disabled,
            [`${this.prefixCls}-picker-lg`]: this.size === 'large',
            [`${this.prefixCls}-picker-sm`]: this.size === 'small'
          }
        ]
      },
      inputWrapClasses () {
        return [`${this.prefixCls}-picker-input`]
      },
      inputClasses () {
        return [
          'ant-input',
          {
            'ant-input-disabled': this.disabled,
            'ant-input-lg': this.size === 'large',
            'ant-input-sm': this.size === 'small'
          }
        ]
      },
      panelClasses () {
        return [
          this.prefixCls,
          `${this.prefixCls}-panel`
        ]
      },
      calendarRows () {
        const firstDay = moment([this.currentYear, this.currentMonth, 1])
        const startDay = firstDay.clone().startOf('week')
        const today = moment()
        const rows = []
        let cursor = startDay.clone()
        for (let w = 0; w < 6; w++) {
          const week = []
          for (let d = 0; d < 7; d++) {
            week.push({
              day: cursor.date(),
              month: cursor.month(),
              year: cursor.year(),
              isCurrentMonth: cursor.month() === this.currentMonth,
              isToday: cursor.isSame(today, 'day'),
              isSelected: this.selectedDate ? cursor.isSame(this.selectedDate, 'day') : false,
              moment: cursor.clone()
            })
            cursor.add(1, 'day')
          }
          rows.push(week)
        }
        return rows
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.selectedDate = moment(val)
          this.currentYear = this.selectedDate.year()
          this.currentMonth = this.selectedDate.month()
        } else {
          this.selectedDate = null
        }
      }
    },
    methods: {
      toggleDropdown () {
        if (this.disabled) return
        this.visible = !this.visible
      },
      handleClose () {
        this.visible = false
      },
      changeYear (offset) {
        this.currentYear += offset
      },
      changeMonth (offset) {
        const d = moment([this.currentYear, this.currentMonth, 1]).add(offset, 'month')
        this.currentYear = d.year()
        this.currentMonth = d.month()
      },
      selectDate (cell) {
        this.selectedDate = cell.moment
        this.currentYear = cell.year
        this.currentMonth = cell.month
        this.$emit('input', cell.moment)
        this.$emit('change', cell.moment, cell.moment.format(this.format))
        this.visible = false
      },
      handleClear () {
        this.selectedDate = null
        this.$emit('input', null)
        this.$emit('change', null, '')
      },
      cellClasses (cell) {
        return [
          `${this.prefixCls}-cell`,
          {
            [`${this.prefixCls}-cell-in-month`]: cell.isCurrentMonth,
            [`${this.prefixCls}-cell-out-month`]: !cell.isCurrentMonth,
            [`${this.prefixCls}-cell-today`]: cell.isToday,
            [`${this.prefixCls}-cell-selected`]: cell.isSelected
          }
        ]
      }
    },
    components: {
      Icon
    }
  }
</script>
