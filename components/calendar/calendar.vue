<template>
  <div :class="wrapClasses">
    <div :class="`${prefixCls}-header`">
      <div :class="`${prefixCls}-header-left`">
        <a :class="`${prefixCls}-prev-year-btn`" @click="changeYear(-1)">«</a>
        <a v-if="innerMode === 'month'" :class="`${prefixCls}-prev-month-btn`" @click="changeMonth(-1)">‹</a>
        <span :class="`${prefixCls}-ym-select`">
          <span :class="`${prefixCls}-year-select`">{{ currentYear }}年</span>
          <span v-if="innerMode === 'month'" :class="`${prefixCls}-month-select`">{{ currentMonth + 1 }}月</span>
        </span>
        <a v-if="innerMode === 'month'" :class="`${prefixCls}-next-month-btn`" @click="changeMonth(1)">›</a>
        <a :class="`${prefixCls}-next-year-btn`" @click="changeYear(1)">»</a>
      </div>
      <div :class="`${prefixCls}-header-right`">
        <div :class="`${prefixCls}-mode-switch`">
          <span
            :class="[`${prefixCls}-mode-switch-btn`, { [`${prefixCls}-mode-switch-btn-active`]: innerMode === 'month' }]"
            @click="switchMode('month')"
          >月</span>
          <span
            :class="[`${prefixCls}-mode-switch-btn`, { [`${prefixCls}-mode-switch-btn-active`]: innerMode === 'year' }]"
            @click="switchMode('year')"
          >年</span>
        </div>
      </div>
    </div>
    <div :class="`${prefixCls}-body`">
      <table v-if="innerMode === 'month'" :class="`${prefixCls}-table`" cellspacing="0">
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
              <div :class="`${prefixCls}-date`">
                <div :class="`${prefixCls}-value`">{{ cell.day }}</div>
                <div :class="`${prefixCls}-content`">
                  <slot name="dateCellRender" :date="cell.moment"></slot>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else :class="`${prefixCls}-month-panel`">
        <div
          v-for="(m, idx) in months"
          :key="idx"
          :class="monthCellClasses(idx)"
          @click="selectMonth(idx)"
        >
          {{ m }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'atu-calendar',
    props: {
      value: {
        type: Object,
        default: undefined
      },
      mode: {
        type: String,
        default: 'month'
      },
      fullscreen: {
        type: Boolean,
        default: true
      },
      prefixCls: {
        type: String,
        default: 'ant-fullcalendar'
      }
    },
    data () {
      const now = this.value ? moment(this.value) : moment()
      return {
        currentYear: now.year(),
        currentMonth: now.month(),
        selectedDate: this.value ? moment(this.value) : moment(),
        innerMode: this.mode
      }
    },
    computed: {
      weekDays () {
        return ['日', '一', '二', '三', '四', '五', '六']
      },
      months () {
        return ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      wrapClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-fullscreen`]: this.fullscreen
          }
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
        }
      },
      mode (val) {
        this.innerMode = val
      }
    },
    methods: {
      changeYear (offset) {
        this.currentYear += offset
      },
      changeMonth (offset) {
        const d = moment([this.currentYear, this.currentMonth, 1]).add(offset, 'month')
        this.currentYear = d.year()
        this.currentMonth = d.month()
      },
      switchMode (mode) {
        this.innerMode = mode
        this.$emit('panelChange', this.selectedDate, mode)
      },
      selectDate (cell) {
        this.selectedDate = cell.moment
        this.currentYear = cell.year
        this.currentMonth = cell.month
        this.$emit('select', cell.moment)
        this.$emit('change', cell.moment)
      },
      selectMonth (monthIdx) {
        this.currentMonth = monthIdx
        const d = moment([this.currentYear, monthIdx, 1])
        this.selectedDate = d
        this.$emit('select', d)
        this.$emit('change', d)
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
      },
      monthCellClasses (idx) {
        return [
          `${this.prefixCls}-month-cell`,
          {
            [`${this.prefixCls}-month-cell-selected`]: idx === this.currentMonth
          }
        ]
      }
    }
  }
</script>
